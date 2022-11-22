import {
	KipperCompiler,
	KipperError,
	KipperParseStream,
	KipperProgramContext,
	KipperSyntaxError,
	LexerOrParserSyntaxError,
	ParseData,
} from "@kipper/core";
import { KipperTypeScriptTarget } from "@kipper/target-ts";
import { assert } from "chai";

async function ensureTracebackDataExists(e: KipperError): Promise<void> {
	assert(e.line != undefined, "Expected existing 'line' meta field");
	assert(e.col != undefined, "Expected existing 'col' meta field");
	assert(e.tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
	assert(e.filePath != undefined, "Expected existing 'filePath' meta field");
}

describe("Kipper errors", () => {
	const defaultTarget = new KipperTypeScriptTarget();
	const defaultConfig = {
		abortOnFirstError: true,
		target: defaultTarget,
	};

	describe("KipperSyntaxError", () => {
		it("LexerError", async () => {
			try {
				await new KipperCompiler().compile("var x: num = 4; \nvar x: num = 5; \\\\D", defaultConfig);
			} catch (e) {
				assert(
					(<LexerOrParserSyntaxError<any>>e).constructor.name === "LexerOrParserSyntaxError",
					"Expected proper error",
				);
				await ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'LexerOrParserSyntaxError'");
		});

		it("ParserError", async () => {
			try {
				await new KipperCompiler().compile("var x: num = 4; \nvar x: num = 5", defaultConfig);
			} catch (e) {
				assert(
					(<LexerOrParserSyntaxError<any>>e).constructor.name === "LexerOrParserSyntaxError",
					"Expected proper error",
				);
				await ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'KipperSyntaxError'");
		});

		it("Other", async () => {
			try {
				await new KipperCompiler().compile("def x() -> num;", defaultConfig);
			} catch (e) {
				assert((<KipperSyntaxError>e).constructor.name === "MissingFunctionBodyError", "Expected proper error");
				assert((<KipperSyntaxError>e).name === "SyntaxError", "Expected proper error");
				await ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'KipperSyntaxError'");
		});
	});

	describe("Compilation errors", () => {
		it("GetTraceback", async () => {
			try {
				await new KipperCompiler().compile('var i: str = "4";\n var i: str = "4";', defaultConfig);
			} catch (e) {
				assert((<KipperError>e).constructor.name === "IdentifierAlreadyUsedByVariableError", "Expected proper error");
				await ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'IdentifierAlreadyUsedByVariableError'");
		});

		it("UnknownTypeError", async () => {
			try {
				await new KipperCompiler().compile("var invalid: UNKNOWN = 4;", defaultConfig);
			} catch (e) {
				assert((<KipperError>e).constructor.name === "UnknownTypeError", "Expected proper error");
				await ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'UnknownTypeError'");
		});

		it("InvalidGlobalError", async () => {
			let compiler = new KipperCompiler();
			try {
				const parseData: ParseData = await compiler.parse(new KipperParseStream("var i: num = 4;"));
				const programCtx: KipperProgramContext = await compiler.getProgramCtx(parseData, defaultConfig);

				// Duplicate identifier
				programCtx.registerBuiltIns({ identifier: "i", params: [], returnType: "void" });
				programCtx.registerBuiltIns({ identifier: "i", params: [], returnType: "void" });
			} catch (e) {
				assert((<KipperError>e).constructor.name === "InvalidGlobalError", "Expected proper error");
				assert((<KipperError>e).line !== undefined, "Expected existing 'line' meta field");
				assert((<KipperError>e).col !== undefined, "Expected existing 'col' meta field");
				assert((<KipperError>e).filePath !== undefined, "Expected existing 'filePath' meta field");
				// Token src should not exist, since this is a configuration error!
				assert((<KipperError>e).tokenSrc === undefined, "Expected non-existing 'tokenSrc' meta field");
				return;
			}
			assert.fail("Expected 'InvalidGlobalError'");
		});

		it("BuiltInOverwriteError", async () => {
			let compiler = new KipperCompiler();
			try {
				const parseData: ParseData = await compiler.parse(new KipperParseStream("var i: num = 4;"));
				const programCtx: KipperProgramContext = await compiler.getProgramCtx(parseData, defaultConfig);

				// Register new global
				programCtx.registerBuiltIns({ identifier: "i", params: [], returnType: "void" });
				await programCtx.compileProgram();
			} catch (e) {
				assert((<KipperError>e).constructor.name === "BuiltInOverwriteError", "Expected proper error");
				await ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'BuiltInOverwriteError'");
		});

		describe("IdentifierAlreadyUsedByFunctionError", () => {
			it("Redeclaration by variable", async () => {
				try {
					await new KipperCompiler().compile("def x() -> void {}; var x: num = 4;", defaultConfig);
				} catch (e) {
					assert((<KipperError>e).constructor.name === "IdentifierAlreadyUsedByFunctionError", "Expected proper error");
					await ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'IdentifierAlreadyUsedByFunctionError'");
			});

			it("Redeclaration by function", async () => {
				try {
					await new KipperCompiler().compile("def x() -> void {} def x() -> void {}", defaultConfig);
				} catch (e) {
					assert((<KipperError>e).constructor.name === "IdentifierAlreadyUsedByFunctionError", "Expected proper error");
					await ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'IdentifierAlreadyUsedByFunctionError'");
			});
		});

		describe("IdentifierAlreadyUsedByVariableError", () => {
			it("Redeclaration by variable", async () => {
				try {
					await new KipperCompiler().compile("var x: num = 5; \nvar x: num = 5;", defaultConfig);
				} catch (e) {
					assert((<KipperError>e).constructor.name === "IdentifierAlreadyUsedByVariableError", "Expected proper error");
					await ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'IdentifierAlreadyUsedByVariableError'");
			});

			it("Redeclaration by function", async () => {
				try {
					await new KipperCompiler().compile("var x: num; def x() -> void {};", defaultConfig);
				} catch (e) {
					assert((<KipperError>e).constructor.name === "IdentifierAlreadyUsedByVariableError", "Expected proper error");
					await ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'IdentifierAlreadyUsedByVariableError'");
			});
		});

		describe("UnknownReferenceError", () => {
			it("Simple reference", async () => {
				try {
					await new KipperCompiler().compile("x;", defaultConfig);
				} catch (e) {
					assert((<KipperError>e).constructor.name === "UnknownReferenceError", "Expected proper error");
					assert((<KipperError>e).name === "ReferenceError", "Expected proper error");
					await ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'UnknownReferenceError'");
			});

			it("Function Call", async () => {
				try {
					await new KipperCompiler().compile('var x: num = call pr("pr");', defaultConfig);
				} catch (e) {
					assert((<KipperError>e).constructor.name === "UnknownReferenceError", "Expected proper error");
					assert((<KipperError>e).name === "ReferenceError", "Expected proper error");
					await ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'UnknownReferenceError'");
			});

			it("Arithmetics", async () => {
				try {
					await new KipperCompiler().compile("var x: num = y + y;", defaultConfig);
				} catch (e) {
					assert((<KipperError>e).constructor.name === "UnknownReferenceError", "Expected proper error");
					assert((<KipperError>e).name === "ReferenceError", "Expected proper error");
					await ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'UnknownReferenceError'");
			});

			it("Nested reference", async () => {
				try {
					await new KipperCompiler().compile("{ { { { x; } } } }", defaultConfig);
				} catch (e) {
					assert((<KipperError>e).constructor.name === "UnknownReferenceError", "Expected proper error");
					assert((<KipperError>e).name === "ReferenceError", "Expected proper error");
					await ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'UnknownReferenceError'");
			});
		});

		describe("InvalidAmountOfArgumentsError", () => {
			describe("Error", () => {
				it("One too many", async () => {
					try {
						await new KipperCompiler().compile('call print("x", "x");', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidAmountOfArgumentsError", "Expected proper error");
						assert((<KipperError>e).name === "ArgumentError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'InvalidAmountOfArgumentsError'");
				});

				it("Two too many", async () => {
					try {
						await new KipperCompiler().compile('call print("x", "x", "x");', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidAmountOfArgumentsError", "Expected proper error");
						assert((<KipperError>e).name === "ArgumentError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'InvalidAmountOfArgumentsError'");
				});

				it("Three too many", async () => {
					try {
						await new KipperCompiler().compile('call print("x", "x", "x", "x");', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidAmountOfArgumentsError", "Expected proper error");
						assert((<KipperError>e).name === "ArgumentError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'InvalidAmountOfArgumentsError'");
				});

				it("Too little", async () => {
					try {
						await new KipperCompiler().compile("call print();", defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidAmountOfArgumentsError", "Expected proper error");
						assert((<KipperError>e).name === "ArgumentError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'InvalidAmountOfArgumentsError'");
				});
			});

			it("NoError", async () => {
				try {
					await new KipperCompiler().compile('call print("x");', defaultConfig);
				} catch (e) {
					assert.fail("Expected no 'InvalidAmountOfArgumentsError'");
				}
			});
		});

		describe("ArithmeticOperationTypeError", () => {
			describe("Error", () => {
				it("str+num", async () => {
					try {
						await new KipperCompiler().compile('"3" + 4;', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'ArithmeticOperationTypeError'");
				});

				it("str-num", async () => {
					try {
						await new KipperCompiler().compile('"3" - 4;', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'ArithmeticOperationTypeError'");
				});

				it("str*num", async () => {
					try {
						await new KipperCompiler().compile('"3" * 4;', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'ArithmeticOperationTypeError'");
				});

				it("str**num", async () => {
					try {
						await new KipperCompiler().compile('"3" ** 4;', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'ArithmeticOperationTypeError'");
				});

				it("str/num", async () => {
					try {
						await new KipperCompiler().compile('"3" / 4;', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'ArithmeticOperationTypeError'");
				});

				it("str%num", async () => {
					try {
						await new KipperCompiler().compile('"3" % 4;', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'ArithmeticOperationTypeError'");
				});

				it("num+str", async () => {
					try {
						await new KipperCompiler().compile('4 + "3";', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'ArithmeticOperationTypeError'");
				});

				it("num-str", async () => {
					try {
						await new KipperCompiler().compile('4 - "3";', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'ArithmeticOperationTypeError'");
				});

				it("num*str", async () => {
					try {
						await new KipperCompiler().compile('4 * "3";', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'ArithmeticOperationTypeError'");
				});

				it("num**str", async () => {
					try {
						await new KipperCompiler().compile('4 ** "3";', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'ArithmeticOperationTypeError'");
				});

				it("num/str", async () => {
					try {
						await new KipperCompiler().compile('4 / "3";', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'ArithmeticOperationTypeError'");
				});

				it("num%str", async () => {
					try {
						await new KipperCompiler().compile('4 % "3";', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'ArithmeticOperationTypeError'");
				});

				it("str+bool", async () => {
					try {
						await new KipperCompiler().compile('"3" + true;', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'ArithmeticOperationTypeError'");
				});

				it("str-bool", async () => {
					try {
						await new KipperCompiler().compile('"3" - true;', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'ArithmeticOperationTypeError'");
				});

				it("str*bool", async () => {
					try {
						await new KipperCompiler().compile('"3" * true;', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'ArithmeticOperationTypeError'");
				});

				it("str**bool", async () => {
					try {
						await new KipperCompiler().compile('"3" ** true;', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'ArithmeticOperationTypeError'");
				});

				it("str/bool", async () => {
					try {
						await new KipperCompiler().compile('"3" / true;', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'ArithmeticOperationTypeError'");
				});

				it("str%bool", async () => {
					try {
						await new KipperCompiler().compile('"3" % true;', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'ArithmeticOperationTypeError'");
				});

				it("bool+str", async () => {
					try {
						await new KipperCompiler().compile('true + "3";', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'ArithmeticOperationTypeError'");
				});

				it("bool-str", async () => {
					try {
						await new KipperCompiler().compile('true - "3";', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'ArithmeticOperationTypeError'");
				});

				it("bool*str", async () => {
					try {
						await new KipperCompiler().compile('true * "3";', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'ArithmeticOperationTypeError'");
				});

				it("bool**str", async () => {
					try {
						await new KipperCompiler().compile('true ** "3";', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'ArithmeticOperationTypeError'");
				});

				it("bool/str", async () => {
					try {
						await new KipperCompiler().compile('true / "3";', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'ArithmeticOperationTypeError'");
				});

				it("bool%str", async () => {
					try {
						await new KipperCompiler().compile('true % "3";', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'ArithmeticOperationTypeError'");
				});

				it("str-=str", async () => {
					try {
						await new KipperCompiler().compile('var x: str = "3"; x -= "4";', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'ArithmeticOperationTypeError'");
				});

				it("str*=str", async () => {
					try {
						await new KipperCompiler().compile('var x: str = "3"; x *= "4";', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'ArithmeticOperationTypeError'");
				});

				it("str/=str", async () => {
					try {
						await new KipperCompiler().compile('var x: str = "3"; x /= "4";', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'ArithmeticOperationTypeError'");
				});

				it("str%=str", async () => {
					try {
						await new KipperCompiler().compile('var x: str = "3"; x %= "4";', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'ArithmeticOperationTypeError'");
				});
			});

			describe("NoError", () => {
				describe("+", () => {
					it("str", async () => {
						try {
							await new KipperCompiler().compile('"3" + "3";', { abortOnFirstError: true, target: defaultTarget });
						} catch (e) {
							assert.fail("Expected no 'ArithmeticOperationTypeError'");
						}
					});

					it("num", async () => {
						try {
							await new KipperCompiler().compile("3 + 3;", { abortOnFirstError: true, target: defaultTarget });
						} catch (e) {
							assert.fail("Expected no 'ArithmeticOperationTypeError'");
						}
					});
				});

				describe("+=", () => {
					it("str", async () => {
						try {
							await new KipperCompiler().compile('var x: str = "3"; x += "3";', defaultConfig);
						} catch (e) {
							assert.fail("Expected no 'ArithmeticOperationTypeError'");
						}
					});

					it("num", async () => {
						try {
							await new KipperCompiler().compile("var x: num = 3; x + 3;", defaultConfig);
						} catch (e) {
							assert.fail("Expected no 'ArithmeticOperationTypeError'");
						}
					});
				});
			});
		});

		describe("InvalidAssignmentError", () => {
			describe("Error", () => {
				it("NumberConstant", async () => {
					try {
						await new KipperCompiler().compile("5 = 5;", { abortOnFirstError: true, target: defaultTarget });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidAssignmentError", "Expected proper error");
						assert((<KipperError>e).name === "InvalidAssignmentError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'InvalidAssignmentError'");
				});

				it("StringConstant", async () => {
					try {
						await new KipperCompiler().compile('"4" = "4";', { abortOnFirstError: true, target: defaultTarget });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidAssignmentError", "Expected proper error");
						assert((<KipperError>e).name === "InvalidAssignmentError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'InvalidAssignmentError'");
				});
			});

			describe("NoError", () => {
				it("identifier", async () => {
					try {
						await new KipperCompiler().compile("var x: num = 0; x = 3 + 3;", defaultConfig);
					} catch (e) {
						assert.fail("Expected no 'InvalidAssignmentError'");
					}
				});
			});
		});

		describe("TypeError", () => {
			describe("Error", () => {
				describe("Definition", () => {
					it("num = str", async () => {
						try {
							await new KipperCompiler().compile('var x: num = "5";', defaultConfig);
						} catch (e) {
							assert((<KipperError>e).constructor.name === "TypeError", "Expected proper error");
							assert((<KipperError>e).name === "TypeError", "Expected proper error");
							await ensureTracebackDataExists(<KipperError>e);
							return;
						}
						assert.fail("Expected 'TypeError'");
					});

					it("str = num", async () => {
						try {
							await new KipperCompiler().compile("var x: str = 5;", defaultConfig);
						} catch (e) {
							assert((<KipperError>e).constructor.name === "TypeError", "Expected proper error");
							assert((<KipperError>e).name === "TypeError", "Expected proper error");
							await ensureTracebackDataExists(<KipperError>e);
							return;
						}
						assert.fail("Expected 'TypeError'");
					});
				});

				describe("Assignment", () => {
					it("num = str", async () => {
						try {
							await new KipperCompiler().compile('var x: num; x = "5";', defaultConfig);
						} catch (e) {
							assert((<KipperError>e).constructor.name === "AssignmentTypeError", "Expected proper error");
							assert((<KipperError>e).name === "TypeError", "Expected proper error");
							await ensureTracebackDataExists(<KipperError>e);
							return;
						}
						assert.fail("Expected 'TypeError'");
					});

					it("str = num", async () => {
						try {
							await new KipperCompiler().compile("var x: str; x = 5;", defaultConfig);
						} catch (e) {
							assert((<KipperError>e).constructor.name === "AssignmentTypeError", "Expected proper error");
							assert((<KipperError>e).name === "TypeError", "Expected proper error");
							await ensureTracebackDataExists(<KipperError>e);
							return;
						}
						assert.fail("Expected 'TypeError'");
					});

					it("str+=num", async () => {
						try {
							await new KipperCompiler().compile('var x: str = "3"; x += 4;', defaultConfig);
						} catch (e) {
							assert((<KipperError>e).constructor.name === "AssignmentTypeError", "Expected proper error");
							assert((<KipperError>e).name === "TypeError", "Expected proper error");
							await ensureTracebackDataExists(<KipperError>e);
							return;
						}
						assert.fail("Expected 'ArithmeticOperationTypeError'");
					});

					it("str-=num", async () => {
						try {
							await new KipperCompiler().compile('var x: str = "3"; x -= 4;', defaultConfig);
						} catch (e) {
							assert((<KipperError>e).constructor.name === "AssignmentTypeError", "Expected proper error");
							assert((<KipperError>e).name === "TypeError", "Expected proper error");
							await ensureTracebackDataExists(<KipperError>e);
							return;
						}
						assert.fail("Expected 'ArithmeticOperationTypeError'");
					});

					it("str*=num", async () => {
						try {
							await new KipperCompiler().compile('var x: str = "3"; x *= 4;', defaultConfig);
						} catch (e) {
							assert((<KipperError>e).constructor.name === "AssignmentTypeError", "Expected proper error");
							assert((<KipperError>e).name === "TypeError", "Expected proper error");
							await ensureTracebackDataExists(<KipperError>e);
							return;
						}
						assert.fail("Expected 'ArithmeticOperationTypeError'");
					});

					it("str/=num", async () => {
						try {
							await new KipperCompiler().compile('var x: str = "3"; x /= 4;', defaultConfig);
						} catch (e) {
							assert((<KipperError>e).constructor.name === "AssignmentTypeError", "Expected proper error");
							assert((<KipperError>e).name === "TypeError", "Expected proper error");
							await ensureTracebackDataExists(<KipperError>e);
							return;
						}
						assert.fail("Expected 'ArithmeticOperationTypeError'");
					});

					it("str%=num", async () => {
						try {
							await new KipperCompiler().compile('var x: str = "3"; x %= 4;', defaultConfig);
						} catch (e) {
							assert((<KipperError>e).constructor.name === "AssignmentTypeError", "Expected proper error");
							assert((<KipperError>e).name === "TypeError", "Expected proper error");
							await ensureTracebackDataExists(<KipperError>e);
							return;
						}
						assert.fail("Expected 'ArithmeticOperationTypeError'");
					});
				});
			});

			describe("NoError", () => {
				it("str = str", async () => {
					try {
						await new KipperCompiler().compile('var x: str = "3";', { abortOnFirstError: true, target: defaultTarget });
					} catch (e) {
						assert.fail("Expected no 'TypeError'");
					}
				});

				it("num = num", async () => {
					try {
						await new KipperCompiler().compile("var x: num = 3;", { abortOnFirstError: true, target: defaultTarget });
					} catch (e) {
						assert.fail("Expected no 'TypeError'");
					}
				});
			});
		});

		describe("InvalidConversionTypeError", () => {
			describe("Error", () => {
				it("str as func", async () => {
					try {
						await new KipperCompiler().compile('"5" as func;', defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidConversionTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'InvalidConversionTypeError'");
				});

				it("num as func", async () => {
					try {
						await new KipperCompiler().compile("5 as func;", defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidConversionTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'InvalidConversionTypeError'");
				});

				it("bool as func", async () => {
					try {
						await new KipperCompiler().compile("true as func;", defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidConversionTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'InvalidConversionTypeError'");
				});

				it("func as str", async () => {
					try {
						await new KipperCompiler().compile("print as str;", defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidConversionTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'InvalidConversionTypeError'");
				});

				it("func as num", async () => {
					try {
						await new KipperCompiler().compile("print as bool;", defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidConversionTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'InvalidConversionTypeError'");
				});

				it("func as bool", async () => {
					try {
						await new KipperCompiler().compile("print as bool;", defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidConversionTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'InvalidConversionTypeError'");
				});
			});

			describe("NoError", () => {
				it("num as str", async () => {
					try {
						await new KipperCompiler().compile("5 as str;", { abortOnFirstError: true, target: defaultTarget });
					} catch (e) {
						assert.fail("Expected no 'InvalidConversionTypeError'");
					}
				});

				it("str as num", async () => {
					try {
						await new KipperCompiler().compile('"5" as num;', { abortOnFirstError: true, target: defaultTarget });
					} catch (e) {
						assert.fail("Expected no 'InvalidConversionTypeError'");
					}
				});

				it("bool as str", async () => {
					try {
						await new KipperCompiler().compile("true as str;", { abortOnFirstError: true, target: defaultTarget });
					} catch (e) {
						assert.fail("Expected no 'InvalidConversionTypeError'");
					}
				});

				it("bool as num", async () => {
					try {
						await new KipperCompiler().compile("true as num;", { abortOnFirstError: true, target: defaultTarget });
					} catch (e) {
						assert.fail("Expected no 'InvalidConversionTypeError'");
					}
				});
			});
		});

		describe("ReservedIdentifierOverwriteError", () => {
			it("Error", async () => {
				try {
					await new KipperCompiler().compile("var instanceof: str;", defaultConfig);
				} catch (e) {
					assert((<KipperError>e).constructor.name === "ReservedIdentifierOverwriteError", "Expected proper error");
					assert((<KipperError>e).name === "IdentifierError", "Expected proper error");
					await ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'ReservedIdentifierOverwriteError'");
			});

			it("NoError", async () => {
				try {
					await new KipperCompiler().compile('var valid: str = "3";', defaultConfig);
				} catch (e) {
					assert.fail("Expected no 'ReservedIdentifierOverwriteError'");
				}
			});
		});

		describe("ReadOnlyTypeError", () => {
			it("Error", async () => {
				try {
					await new KipperCompiler().compile(`const invalid: str = "3"; invalid = "5";`, defaultConfig);
				} catch (e) {
					assert((<KipperError>e).constructor.name === "ReadOnlyTypeError", "Expected proper error");
					assert((<KipperError>e).name === "TypeError", "Expected proper error");
					await ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'ReadOnlyTypeError'");
			});

			it("NoError", async () => {
				try {
					await new KipperCompiler().compile('var valid: str = "3"; valid = "5";', defaultConfig);
				} catch (e) {
					assert.fail("Expected no 'ReadOnlyTypeError'");
				}
			});
		});

		describe("UndefinedConstantError", () => {
			it("Error", async () => {
				try {
					await new KipperCompiler().compile(`const invalid: str;`, defaultConfig);
				} catch (e) {
					assert((<KipperError>e).constructor.name === "UndefinedConstantError", "Expected proper error");
					assert((<KipperError>e).name === "UndefinedConstantError", "Expected proper error");
					await ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'UndefinedConstantError'");
			});

			it("NoError", async () => {
				try {
					await new KipperCompiler().compile('const valid: str = "3";', defaultConfig);
				} catch (e) {
					assert.fail("Expected no 'UndefinedConstantError'");
				}
			});
		});

		describe("UndefinedReferenceError", () => {
			describe("Error", () => {
				it("Arithmetic assignment", async () => {
					try {
						await new KipperCompiler().compile(`var x: str; x += "5";`, defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "UndefinedReferenceError", "Expected proper error");
						assert((<KipperError>e).name === "ReferenceError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'UndefinedReferenceError'");
				});

				it("Arithmetic expression", async () => {
					try {
						await new KipperCompiler().compile(`var x: num; x + 5;`, defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "UndefinedReferenceError", "Expected proper error");
						assert((<KipperError>e).name === "ReferenceError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'UndefinedReferenceError'");
				});

				it("Identifier reference", async () => {
					try {
						await new KipperCompiler().compile(`var x: str; x;`, defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "UndefinedReferenceError", "Expected proper error");
						assert((<KipperError>e).name === "ReferenceError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'UndefinedReferenceError'");
				});
			});

			it("NoError", async () => {
				try {
					await new KipperCompiler().compile('var str1: str = "3"; str1 += "5"; str1 = str1 + "5";', defaultConfig);
				} catch (e) {
					assert.fail("Expected no 'UndefinedReferenceError'");
				}
			});
		});

		describe("InvalidRelationalComparisonTypeError", () => {
			it("Error", async () => {
				try {
					await new KipperCompiler().compile(`"5" > 5;`, defaultConfig);
				} catch (e) {
					assert((<KipperError>e).constructor.name === "InvalidRelationalComparisonTypeError", "Expected proper error");
					assert((<KipperError>e).name === "TypeError", "Expected proper error");
					await ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'InvalidRelationalComparisonTypeError'");
			});

			it("NoError", async () => {
				try {
					await new KipperCompiler().compile("5 > 4;", defaultConfig);
				} catch (e) {
					assert.fail("Expected no 'InvalidRelationalComparisonTypeError'");
				}
			});
		});

		describe("InvalidUnaryExpressionTypeError", () => {
			describe("Error", () => {
				it("+", async () => {
					try {
						await new KipperCompiler().compile(`+"5";`, defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidUnaryExpressionTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'InvalidUnaryExpressionTypeError'");
				});

				it("-", async () => {
					try {
						await new KipperCompiler().compile(`-"5";`, defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidUnaryExpressionTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'InvalidUnaryExpressionTypeError'");
				});
			});

			it("NoError", async () => {
				try {
					await new KipperCompiler().compile("5 > 4;", defaultConfig);
				} catch (e) {
					assert.fail("Expected no 'InvalidUnaryExpressionTypeError'");
				}
			});
		});

		describe("IncompleteReturnsInCodePathsError", () => {
			describe("Error", () => {
				it("Empty Body", async () => {
					try {
						await new KipperCompiler().compile(`def x() -> num {};`, defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "IncompleteReturnsInCodePathsError", "Expected proper error");
						assert((<KipperError>e).name === "SyntaxError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'IncompleteReturnsInCodePaths'");
				});

				it("Simple One-Branch If (Else missing)", async () => {
					try {
						// In many modern languages this wouldn't be an issue, since the compiler recognises that the condition
						// will always be true, but here we don't have that luxury (for now).
						await new KipperCompiler().compile(`def x() -> num { if (true) { return 1; } };`, defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "IncompleteReturnsInCodePathsError", "Expected proper error");
						assert((<KipperError>e).name === "SyntaxError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'IncompleteReturnsInCodePaths'");
				});

				it("Simple Two-Branch If (If empty)", async () => {
					try {
						await new KipperCompiler().compile(`def x() -> num { if (true) {  } else { return 1; } };`, defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "IncompleteReturnsInCodePathsError", "Expected proper error");
						assert((<KipperError>e).name === "SyntaxError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'IncompleteReturnsInCodePaths'");
				});

				it("Simple Two-Branch If (Else empty)", async () => {
					try {
						await new KipperCompiler().compile(`def x() -> num { if (true) { return 1; } else { } };`, defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "IncompleteReturnsInCodePathsError", "Expected proper error");
						assert((<KipperError>e).name === "SyntaxError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'IncompleteReturnsInCodePaths'");
				});

				describe("Nested Multi-Branch If (Nested If Empty)", () => {
					it("First branch", async () => {
						try {
							await new KipperCompiler().compile(
								`def x() -> num { if (true) { if (true) { } else { return 1; } } else { return 1; } };`,
								defaultConfig,
							);
						} catch (e) {
							assert(
								(<KipperError>e).constructor.name === "IncompleteReturnsInCodePathsError",
								"Expected proper error",
							);
							assert((<KipperError>e).name === "SyntaxError", "Expected proper error");
							await ensureTracebackDataExists(<KipperError>e);
							return;
						}
						assert.fail("Expected 'IncompleteReturnsInCodePaths'");
					});

					it("Second branch", async () => {
						try {
							await new KipperCompiler().compile(
								`def x() -> num { if (true) { return 1; } else { if (true) { } else { return 1; } } };`,
								defaultConfig,
							);
						} catch (e) {
							assert(
								(<KipperError>e).constructor.name === "IncompleteReturnsInCodePathsError",
								"Expected proper error",
							);
							assert((<KipperError>e).name === "SyntaxError", "Expected proper error");
							return;
						}
						assert.fail("Expected 'IncompleteReturnsInCodePaths'");
					});
				});

				describe("Nested Multi-Branch If (Nested Else Empty)", () => {
					it("First branch", async () => {
						try {
							await new KipperCompiler().compile(
								`def x() -> num { if (true) { if (true) { return 1; } else { } } else { return 1; } };`,
								defaultConfig,
							);
						} catch (e) {
							assert(
								(<KipperError>e).constructor.name === "IncompleteReturnsInCodePathsError",
								"Expected proper error",
							);
							assert((<KipperError>e).name === "SyntaxError", "Expected proper error");
							await ensureTracebackDataExists(<KipperError>e);
							return;
						}
						assert.fail("Expected 'IncompleteReturnsInCodePaths'");
					});

					it("Second branch", async () => {
						try {
							await new KipperCompiler().compile(
								`def x() -> num { if (true) { return 1; } else { if (true) { return 1; } else { } } };`,
								defaultConfig,
							);
						} catch (e) {
							assert(
								(<KipperError>e).constructor.name === "IncompleteReturnsInCodePathsError",
								"Expected proper error",
							);
							assert((<KipperError>e).name === "SyntaxError", "Expected proper error");
							await ensureTracebackDataExists(<KipperError>e);
							return;
						}
						assert.fail("Expected 'IncompleteReturnsInCodePaths'");
					});
				});

				describe("Nested Multi-Branch If (Nested Else Missing)", () => {
					it("First branch", async () => {
						try {
							await new KipperCompiler().compile(
								`def x() -> num { if (true) { if (true) { return 1; } } else { return 1; } };`,
								defaultConfig,
							);
						} catch (e) {
							assert(
								(<KipperError>e).constructor.name === "IncompleteReturnsInCodePathsError",
								"Expected proper error",
							);
							assert((<KipperError>e).name === "SyntaxError", "Expected proper error");
							await ensureTracebackDataExists(<KipperError>e);
							return;
						}
						assert.fail("Expected 'IncompleteReturnsInCodePaths'");
					});

					it("Second branch", async () => {
						try {
							await new KipperCompiler().compile(
								`def x() -> num { if (true) { if (true) { return 1; } else { } } else { return 1; } };`,
								defaultConfig,
							);
						} catch (e) {
							assert(
								(<KipperError>e).constructor.name === "IncompleteReturnsInCodePathsError",
								"Expected proper error",
							);
							assert((<KipperError>e).name === "SyntaxError", "Expected proper error");
							return;
						}
						assert.fail("Expected 'IncompleteReturnsInCodePaths'");
					});
				});
			});
		});

		describe("InvalidUnaryExpressionOperandError", () => {
			describe("Error", () => {
				it("Invalid constant operand", async () => {
					try {
						await new KipperCompiler().compile(`5++;`, defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidUnaryExpressionOperandError", "Expected proper error");
						assert((<KipperError>e).name === "SyntaxError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'InvalidUnaryExpressionOperandError'");
				});

				it("Invalid constant operand (nested)", async () => {
					try {
						await new KipperCompiler().compile(`(5)++;`, defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidUnaryExpressionOperandError", "Expected proper error");
						assert((<KipperError>e).name === "SyntaxError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'InvalidUnaryExpressionOperandError'");
				});

				it("Invalid reference operand", async () => {
					try {
						await new KipperCompiler().compile(`var x: num = 5; ++x++;`, defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidUnaryExpressionOperandError", "Expected proper error");
						assert((<KipperError>e).name === "SyntaxError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'InvalidUnaryExpressionOperandError'");
				});

				it("Invalid reference operand (nested)", async () => {
					try {
						await new KipperCompiler().compile(`var x: num = 5; ((x + 5))++;`, defaultConfig);
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidUnaryExpressionOperandError", "Expected proper error");
						assert((<KipperError>e).name === "SyntaxError", "Expected proper error");
						await ensureTracebackDataExists(<KipperError>e);
						return;
					}
					assert.fail("Expected 'InvalidUnaryExpressionOperandError'");
				});
			});

			describe("NoError", () => {
				it("Regular Unary Expression", async () => {});

				it("Identifier in Tangled Expression", async () => {});

				it("Identifier in Tangled Expression (Nested)", async () => {});
			});
		});
	});

	describe("Error recovery", () => {
		const activeErrorRecovery = {
			recover: true,
			target: defaultTarget,
		};
		const disabledErrorRecovery = {
			recover: false,
			target: defaultTarget,
		};

		// Test cases for error recovery
		const errorRecoveryTestCases = {
			noError: "var x: num = 5;",
			semanticError: ["const x: str;", "def x() -> num { }; unknown; return;"],
			typeError: ["const x: str = 5;", 'var i: str = 5; true + "5"; def x() -> num { return ""; }'],
		};

		describe("Disabled", () => {
			it("No error", async () => {
				const result = await new KipperCompiler().compile(errorRecoveryTestCases["noError"], disabledErrorRecovery);

				assert(result.errors.length === 0, "Expected no errors");
			});

			describe("Semantic error", () => {
				it("One error", async () => {
					const result = await new KipperCompiler().compile(
						errorRecoveryTestCases["semanticError"][0],
						disabledErrorRecovery,
					);

					assert(result.errors.length === 1, "Expected only one error");
				});

				it("Multiple errors", async () => {
					const result = await new KipperCompiler().compile(
						errorRecoveryTestCases["semanticError"][1],
						disabledErrorRecovery,
					);

					assert(result.errors.length === 1, "Expected only one error");
				});
			});

			describe("Type error", () => {
				it("One error", async () => {
					const result = await new KipperCompiler().compile(
						errorRecoveryTestCases["typeError"][0],
						disabledErrorRecovery,
					);

					assert(result.errors.length === 1, "Expected only one error");
				});

				it("Multiple errors", async () => {
					const result = await new KipperCompiler().compile(
						errorRecoveryTestCases["typeError"][1],
						disabledErrorRecovery,
					);

					assert(result.errors.length === 1, "Expected only one error");
				});
			});
		});

		describe("Enabled", () => {
			it("No error", async () => {
				const result = await new KipperCompiler().compile(errorRecoveryTestCases["noError"], activeErrorRecovery);

				assert(result.errors.length === 0, "Expected no errors");
			});

			describe("Semantic error", () => {
				it("One error", async () => {
					const result = await new KipperCompiler().compile(
						errorRecoveryTestCases["semanticError"][0],
						activeErrorRecovery,
					);

					assert(result.errors.length === 1, "Expected only one error");
				});

				it("Multiple errors", async () => {
					const result = await new KipperCompiler().compile(
						errorRecoveryTestCases["semanticError"][1],
						activeErrorRecovery,
					);

					assert(result.errors.length === 3, "Expected only one error");
				});
			});

			describe("Type error", () => {
				it("One error", async () => {
					const result = await new KipperCompiler().compile(
						errorRecoveryTestCases["typeError"][0],
						activeErrorRecovery,
					);

					assert(result.errors.length === 1, "Expected only one error");
				});

				it("Multiple errors", async () => {
					const result = await new KipperCompiler().compile(
						errorRecoveryTestCases["typeError"][1],
						activeErrorRecovery,
					);

					assert(result.errors.length === 3, "Expected only one error");
				});
			});
		});
	});
});
