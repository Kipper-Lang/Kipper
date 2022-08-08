import {
	KipperCompiler,
	KipperError,
	KipperParseStream,
	KipperProgramContext,
	KipperSyntaxError,
	ParseData,
} from "@kipper/core";
import { assert } from "chai";

describe("Kipper errors", () => {
	describe("KipperSyntaxError", () => {
		it("LexerError", async () => {
			try {
				await new KipperCompiler().compile("var x: num = 4; \nvar x: num = 5; \\\\D", { abortOnFirstError: true });
			} catch (e) {
				assert((<KipperSyntaxError<any>>e).constructor.name === "KipperSyntaxError", "Expected proper error");
				assert((<KipperSyntaxError<any>>e).line != undefined, "Expected existing 'line' meta field");
				assert((<KipperSyntaxError<any>>e).col != undefined, "Expected existing 'col' meta field");
				assert((<KipperSyntaxError<any>>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
				assert((<KipperSyntaxError<any>>e).filePath != undefined, "Expected existing 'filePath' meta field");
				return;
			}
			assert(false, "Expected 'KipperSyntaxError'");
		});

		it("ParserError", async () => {
			try {
				await new KipperCompiler().compile("var x: num = 4; \nvar x: num = 5", { abortOnFirstError: true });
			} catch (e) {
				assert((<KipperSyntaxError<any>>e).constructor.name === "KipperSyntaxError", "Expected proper error");
				assert((<KipperSyntaxError<any>>e).line != undefined, "Expected existing 'line' meta field");
				assert((<KipperSyntaxError<any>>e).col != undefined, "Expected existing 'col' meta field");
				assert((<KipperSyntaxError<any>>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
				assert((<KipperSyntaxError<any>>e).filePath != undefined, "Expected existing 'filePath' meta field");
				return;
			}
			assert(false, "Expected 'KipperSyntaxError'");
		});
	});

	describe("Compilation errors", () => {
		it("GetTraceback", async () => {
			try {
				await new KipperCompiler().compile('var i: str = "4";\n var i: str = "4";', { abortOnFirstError: true });
			} catch (e) {
				assert((<KipperError>e).constructor.name === "IdentifierAlreadyUsedByVariableError", "Expected proper error");
				assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
				assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
				assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
				assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
				return;
			}
			assert(false, "Expected 'IdentifierAlreadyUsedByVariableError'");
		});

		it("UnknownTypeError", async () => {
			try {
				await new KipperCompiler().compile("var invalid: UNKNOWN = 4;", { abortOnFirstError: true });
			} catch (e) {
				assert((<KipperError>e).constructor.name === "UnknownTypeError", "Expected proper error");
				assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
				assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
				assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
				assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
				return;
			}
			assert(false, "Expected 'UnknownTypeError'");
		});

		it("InvalidGlobalError", async () => {
			let compiler = new KipperCompiler();
			try {
				const parseData: ParseData = await compiler.parse(new KipperParseStream("var i: num = 4;"));
				const programCtx: KipperProgramContext = await compiler.getProgramCtx(parseData, { abortOnFirstError: true });

				// Duplicate identifier
				programCtx.registerBuiltIns({ identifier: "i", args: [], returnType: "void" });
				programCtx.registerBuiltIns({ identifier: "i", args: [], returnType: "void" });
			} catch (e) {
				assert((<KipperError>e).constructor.name === "InvalidGlobalError", "Expected proper error");
				assert((<KipperError>e).line !== undefined, "Expected existing 'line' meta field");
				assert((<KipperError>e).col !== undefined, "Expected existing 'col' meta field");

				// Token src should not exist, since this is a configuration error!
				assert((<KipperError>e).tokenSrc === undefined, "Expected non-existing 'tokenSrc' meta field");
				assert((<KipperError>e).filePath !== undefined, "Expected existing 'filePath' meta field");
				return;
			}
			assert(false, "Expected 'InvalidGlobalError'");
		});

		it("BuiltInOverwriteError", async () => {
			let compiler = new KipperCompiler();
			try {
				const parseData: ParseData = await compiler.parse(new KipperParseStream("var i: num = 4;"));
				const programCtx: KipperProgramContext = await compiler.getProgramCtx(parseData, { abortOnFirstError: true });

				// Register new global
				programCtx.registerBuiltIns({ identifier: "i", args: [], returnType: "void" });
				await programCtx.compileProgram();
			} catch (e) {
				assert((<KipperError>e).constructor.name === "BuiltInOverwriteError", "Expected proper error");
				assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
				assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
				assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
				assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
				return;
			}
			assert(false, "Expected 'BuiltInOverwriteError'");
		});

		describe("IdentifierAlreadyUsedByFunctionError", () => {
			it("Redeclaration by variable", async () => {
				try {
					await new KipperCompiler().compile(new KipperParseStream("def x() -> void; var x: num = 4;"), {
						abortOnFirstError: true,
					});
				} catch (e) {
					assert((<KipperError>e).constructor.name === "IdentifierAlreadyUsedByFunctionError", "Expected proper error");
					assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
					assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
					assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
					assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
					return;
				}
				assert(false, "Expected 'IdentifierAlreadyUsedByFunctionError'");
			});

			it("Redeclaration by function", async () => {
				try {
					await new KipperCompiler().compile(new KipperParseStream("def x() -> void {} def x() -> void {}"), {
						abortOnFirstError: true,
					});
				} catch (e) {
					assert((<KipperError>e).constructor.name === "IdentifierAlreadyUsedByFunctionError", "Expected proper error");
					assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
					assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
					assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
					assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
					return;
				}
				assert(false, "Expected 'IdentifierAlreadyUsedByFunctionError'");
			});
		});

		describe("IdentifierAlreadyUsedByVariableError", () => {
			it("Redeclaration by variable", async () => {
				try {
					await new KipperCompiler().compile(new KipperParseStream("var x: num = 5; \nvar x: num = 5;"), {
						abortOnFirstError: true,
					});
				} catch (e) {
					assert((<KipperError>e).constructor.name === "IdentifierAlreadyUsedByVariableError", "Expected proper error");
					assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
					assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
					assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
					assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
					return;
				}
				assert(false, "Expected 'IdentifierAlreadyUsedByVariableError'");
			});

			it("Redeclaration by function", async () => {
				try {
					await new KipperCompiler().compile(new KipperParseStream("var x: num; def x() -> void;"), {
						abortOnFirstError: true,
					});
				} catch (e) {
					assert((<KipperError>e).constructor.name === "IdentifierAlreadyUsedByVariableError", "Expected proper error");
					assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
					assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
					assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
					assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
					return;
				}
				assert(false, "Expected 'IdentifierAlreadyUsedByVariableError'");
			});
		});

		describe("UnknownReferenceError", () => {
			it("Simple reference", async () => {
				try {
					await new KipperCompiler().compile(new KipperParseStream("x;"), { abortOnFirstError: true });
				} catch (e) {
					assert((<KipperError>e).constructor.name === "UnknownReferenceError", "Expected proper error");
					assert((<KipperError>e).name === "IdentifierError", "Expected proper error");
					assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
					assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
					assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
					assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
					return;
				}
				assert(false, "Expected 'UnknownReferenceError'");
			});

			it("Function Call", async () => {
				try {
					await new KipperCompiler().compile(new KipperParseStream('var x: num = call pr("pr");'), {
						abortOnFirstError: true,
					});
				} catch (e) {
					assert((<KipperError>e).constructor.name === "UnknownReferenceError", "Expected proper error");
					assert((<KipperError>e).name === "IdentifierError", "Expected proper error");
					assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
					assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
					assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
					assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
					return;
				}
				assert(false, "Expected 'UnknownReferenceError'");
			});

			it("Arithmetics", async () => {
				try {
					await new KipperCompiler().compile(new KipperParseStream("var x: num = y + y;"), { abortOnFirstError: true });
				} catch (e) {
					assert((<KipperError>e).constructor.name === "UnknownReferenceError", "Expected proper error");
					assert((<KipperError>e).name === "IdentifierError", "Expected proper error");
					assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
					assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
					assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
					assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
					return;
				}
				assert(false, "Expected 'UnknownReferenceError'");
			});

			it("Nested reference", async () => {
				try {
					await new KipperCompiler().compile(new KipperParseStream("{ { { { x; } } } }"), { abortOnFirstError: true });
				} catch (e) {
					assert((<KipperError>e).constructor.name === "UnknownReferenceError", "Expected proper error");
					assert((<KipperError>e).name === "IdentifierError", "Expected proper error");
					assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
					assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
					assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
					assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
					return;
				}
				assert(false, "Expected 'UnknownReferenceError'");
			});
		});

		describe("FunctionReturnTypeError", () => {
			describe("Error", () => {
				it("func", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("def x() -> func {}"), {
							abortOnFirstError: true,
						});
					} catch (e) {
						assert((<KipperError>e).constructor.name === "FunctionReturnTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'FunctionReturnTypeError'");
				});
			});

			describe("NoError", () => {
				it("void", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("def x() -> void {}"), {
							abortOnFirstError: true,
						});
					} catch (e) {
						assert(false, "Expected no 'FunctionReturnTypeError'");
					}
				});

				it("num", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("def x() -> num {}"), { abortOnFirstError: true });
					} catch (e) {
						assert(false, "Expected no 'FunctionReturnTypeError'");
					}
				});

				it("str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("def x() -> str {}"), { abortOnFirstError: true });
					} catch (e) {
						assert(false, "Expected no 'FunctionReturnTypeError'");
					}
				});

				it("bool", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("def x() -> bool {}"), {
							abortOnFirstError: true,
						});
					} catch (e) {
						assert(false, "Expected no 'FunctionReturnTypeError'");
					}
				});

				it("list", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("def x() -> list {}"), {
							abortOnFirstError: true,
						});
					} catch (e) {
						assert(false, "Expected no 'FunctionReturnTypeError'");
					}
				});
			});
		});

		describe("InvalidAmountOfArgumentsError", () => {
			describe("Error", () => {
				it("One too many", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('call print("x", "x");'), {
							abortOnFirstError: true,
						});
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidAmountOfArgumentsError", "Expected proper error");
						assert((<KipperError>e).name === "ArgumentError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidAmountOfArgumentsError'");
				});

				it("Two too many", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('call print("x", "x", "x");'), {
							abortOnFirstError: true,
						});
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidAmountOfArgumentsError", "Expected proper error");
						assert((<KipperError>e).name === "ArgumentError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidAmountOfArgumentsError'");
				});

				it("Three too many", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('call print("x", "x", "x", "x");'), {
							abortOnFirstError: true,
						});
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidAmountOfArgumentsError", "Expected proper error");
						assert((<KipperError>e).name === "ArgumentError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidAmountOfArgumentsError'");
				});

				it("Too little", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("call print();"), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidAmountOfArgumentsError", "Expected proper error");
						assert((<KipperError>e).name === "ArgumentError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidAmountOfArgumentsError'");
				});
			});

			it("NoError", async () => {
				try {
					await new KipperCompiler().compile(new KipperParseStream('call print("x");'), { abortOnFirstError: true });
				} catch (e) {
					assert(false, "Expected no 'InvalidAmountOfArgumentsError'");
				}
			});
		});

		describe("ArithmeticOperationTypeError", () => {
			describe("Error", () => {
				it("str+num", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('"3" + 4;'), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'ArithmeticOperationTypeError'");
				});

				it("str-num", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('"3" - 4;'), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'ArithmeticOperationTypeError'");
				});

				it("str*num", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('"3" * 4;'), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'ArithmeticOperationTypeError'");
				});

				it("str**num", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('"3" ** 4;'), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'ArithmeticOperationTypeError'");
				});

				it("str/num", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('"3" / 4;'), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'ArithmeticOperationTypeError'");
				});

				it("str%num", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('"3" % 4;'), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'ArithmeticOperationTypeError'");
				});

				it("num+str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('4 + "3";'), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'ArithmeticOperationTypeError'");
				});

				it("num-str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('4 - "3";'), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'ArithmeticOperationTypeError'");
				});

				it("num*str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('4 * "3";'), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'ArithmeticOperationTypeError'");
				});

				it("num**str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('4 ** "3";'), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'ArithmeticOperationTypeError'");
				});

				it("num/str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('4 / "3";'), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'ArithmeticOperationTypeError'");
				});

				it("num%str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('4 % "3";'), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'ArithmeticOperationTypeError'");
				});

				it("str+bool", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('"3" + true;'), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'ArithmeticOperationTypeError'");
				});

				it("str-bool", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('"3" - true;'), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'ArithmeticOperationTypeError'");
				});

				it("str*bool", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('"3" * true;'), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'ArithmeticOperationTypeError'");
				});

				it("str**bool", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('"3" ** true;'), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'ArithmeticOperationTypeError'");
				});

				it("str/bool", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('"3" / true;'), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'ArithmeticOperationTypeError'");
				});

				it("str%bool", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('"3" % true;'), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'ArithmeticOperationTypeError'");
				});

				it("bool+str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('true + "3";'), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'ArithmeticOperationTypeError'");
				});

				it("bool-str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('true - "3";'), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'ArithmeticOperationTypeError'");
				});

				it("bool*str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('true * "3";'), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'ArithmeticOperationTypeError'");
				});

				it("bool**str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('true ** "3";'), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'ArithmeticOperationTypeError'");
				});

				it("bool/str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('true / "3";'), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'ArithmeticOperationTypeError'");
				});

				it("bool%str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('true % "3";'), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'ArithmeticOperationTypeError'");
				});

				it("str-=str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('var x: str = "3"; x -= "4";'), {
							abortOnFirstError: true,
						});
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'ArithmeticOperationTypeError'");
				});

				it("str*=str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('var x: str = "3"; x *= "4";'), {
							abortOnFirstError: true,
						});
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'ArithmeticOperationTypeError'");
				});

				it("str/=str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('var x: str = "3"; x /= "4";'), {
							abortOnFirstError: true,
						});
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'ArithmeticOperationTypeError'");
				});

				it("str%=str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('var x: str = "3"; x %= "4";'), {
							abortOnFirstError: true,
						});
					} catch (e) {
						assert((<KipperError>e).constructor.name === "ArithmeticOperationTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'ArithmeticOperationTypeError'");
				});
			});

			describe("NoError", () => {
				describe("+", () => {
					it("str", async () => {
						try {
							await new KipperCompiler().compile('"3" + "3";', { abortOnFirstError: true });
						} catch (e) {
							assert(false, "Expected no 'ArithmeticOperationTypeError'");
						}
					});

					it("num", async () => {
						try {
							await new KipperCompiler().compile("3 + 3;", { abortOnFirstError: true });
						} catch (e) {
							assert(false, "Expected no 'ArithmeticOperationTypeError'");
						}
					});
				});

				describe("+=", () => {
					it("str", async () => {
						try {
							await new KipperCompiler().compile('var x: str = "3"; x += "3";', { abortOnFirstError: true });
						} catch (e) {
							assert(false, "Expected no 'ArithmeticOperationTypeError'");
						}
					});

					it("num", async () => {
						try {
							await new KipperCompiler().compile("var x: num = 3; x + 3;", { abortOnFirstError: true });
						} catch (e) {
							assert(false, "Expected no 'ArithmeticOperationTypeError'");
						}
					});
				});
			});
		});

		describe("InvalidAssignmentError", () => {
			describe("Error", () => {
				it("NumberConstant", async () => {
					try {
						await new KipperCompiler().compile("5 = 5;", { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidAssignmentError", "Expected proper error");
						assert((<KipperError>e).name === "InvalidAssignmentError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidAssignmentError'");
				});

				it("StringConstant", async () => {
					try {
						await new KipperCompiler().compile('"4" = "4";', { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidAssignmentError", "Expected proper error");
						assert((<KipperError>e).name === "InvalidAssignmentError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidAssignmentError'");
				});
			});

			describe("NoError", () => {
				it("identifier", async () => {
					try {
						await new KipperCompiler().compile("var x: num = 0; x = 3 + 3;", { abortOnFirstError: true });
					} catch (e) {
						assert(false, "Expected no 'InvalidAssignmentError'");
					}
				});
			});
		});

		describe("TypeError", () => {
			describe("Error", () => {
				describe("Definition", () => {
					it("num = str", async () => {
						try {
							await new KipperCompiler().compile(new KipperParseStream('var x: num = "5";'), {
								abortOnFirstError: true,
							});
						} catch (e) {
							assert((<KipperError>e).constructor.name === "TypeError", "Expected proper error");
							assert((<KipperError>e).name === "TypeError", "Expected proper error");
							assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
							assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
							assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
							assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
							return;
						}
						assert(false, "Expected 'TypeError'");
					});

					it("str = num", async () => {
						try {
							await new KipperCompiler().compile(new KipperParseStream("var x: str = 5;"), { abortOnFirstError: true });
						} catch (e) {
							assert((<KipperError>e).constructor.name === "TypeError", "Expected proper error");
							assert((<KipperError>e).name === "TypeError", "Expected proper error");
							assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
							assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
							assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
							assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
							return;
						}
						assert(false, "Expected 'TypeError'");
					});
				});

				describe("Assignment", () => {
					it("num = str", async () => {
						try {
							await new KipperCompiler().compile(new KipperParseStream('var x: num; x = "5";'), {
								abortOnFirstError: true,
							});
						} catch (e) {
							assert((<KipperError>e).constructor.name === "AssignmentTypeError", "Expected proper error");
							assert((<KipperError>e).name === "TypeError", "Expected proper error");
							assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
							assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
							assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
							assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
							return;
						}
						assert(false, "Expected 'TypeError'");
					});

					it("str = num", async () => {
						try {
							await new KipperCompiler().compile(new KipperParseStream("var x: str; x = 5;"), {
								abortOnFirstError: true,
							});
						} catch (e) {
							assert((<KipperError>e).constructor.name === "AssignmentTypeError", "Expected proper error");
							assert((<KipperError>e).name === "TypeError", "Expected proper error");
							assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
							assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
							assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
							assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
							return;
						}
						assert(false, "Expected 'TypeError'");
					});

					it("str+=num", async () => {
						try {
							await new KipperCompiler().compile(new KipperParseStream('var x: str = "3"; x += 4;'), {
								abortOnFirstError: true,
							});
						} catch (e) {
							assert((<KipperError>e).constructor.name === "AssignmentTypeError", "Expected proper error");
							assert((<KipperError>e).name === "TypeError", "Expected proper error");
							assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
							assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
							assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
							assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
							return;
						}
						assert(false, "Expected 'ArithmeticOperationTypeError'");
					});

					it("str-=num", async () => {
						try {
							await new KipperCompiler().compile(new KipperParseStream('var x: str = "3"; x -= 4;'), {
								abortOnFirstError: true,
							});
						} catch (e) {
							assert((<KipperError>e).constructor.name === "AssignmentTypeError", "Expected proper error");
							assert((<KipperError>e).name === "TypeError", "Expected proper error");
							assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
							assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
							assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
							assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
							return;
						}
						assert(false, "Expected 'ArithmeticOperationTypeError'");
					});

					it("str*=num", async () => {
						try {
							await new KipperCompiler().compile(new KipperParseStream('var x: str = "3"; x *= 4;'), {
								abortOnFirstError: true,
							});
						} catch (e) {
							assert((<KipperError>e).constructor.name === "AssignmentTypeError", "Expected proper error");
							assert((<KipperError>e).name === "TypeError", "Expected proper error");
							assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
							assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
							assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
							assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
							return;
						}
						assert(false, "Expected 'ArithmeticOperationTypeError'");
					});

					it("str/=num", async () => {
						try {
							await new KipperCompiler().compile(new KipperParseStream('var x: str = "3"; x /= 4;'), {
								abortOnFirstError: true,
							});
						} catch (e) {
							assert((<KipperError>e).constructor.name === "AssignmentTypeError", "Expected proper error");
							assert((<KipperError>e).name === "TypeError", "Expected proper error");
							assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
							assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
							assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
							assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
							return;
						}
						assert(false, "Expected 'ArithmeticOperationTypeError'");
					});

					it("str%=num", async () => {
						try {
							await new KipperCompiler().compile(new KipperParseStream('var x: str = "3"; x %= 4;'), {
								abortOnFirstError: true,
							});
						} catch (e) {
							assert((<KipperError>e).constructor.name === "AssignmentTypeError", "Expected proper error");
							assert((<KipperError>e).name === "TypeError", "Expected proper error");
							assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
							assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
							assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
							assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
							return;
						}
						assert(false, "Expected 'ArithmeticOperationTypeError'");
					});
				});
			});

			describe("NoError", () => {
				it("str = str", async () => {
					try {
						await new KipperCompiler().compile('var x: str = "3";', { abortOnFirstError: true });
					} catch (e) {
						assert(false, "Expected no 'TypeError'");
					}
				});

				it("num = num", async () => {
					try {
						await new KipperCompiler().compile("var x: num = 3;", { abortOnFirstError: true });
					} catch (e) {
						assert(false, "Expected no 'TypeError'");
					}
				});
			});
		});

		describe("InvalidConversionTypeError", () => {
			describe("Error", () => {
				it("str as func", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('"5" as func;'), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidConversionTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidConversionTypeError'");
				});

				it("num as func", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("5 as func;"), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidConversionTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidConversionTypeError'");
				});

				it("bool as func", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("true as func;"), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidConversionTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidConversionTypeError'");
				});

				it("func as str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("print as str;"), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidConversionTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidConversionTypeError'");
				});

				it("func as num", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("print as bool;"), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidConversionTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidConversionTypeError'");
				});

				it("func as bool", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("print as bool;"), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidConversionTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidConversionTypeError'");
				});
			});

			describe("NoError", () => {
				it("num as str", async () => {
					try {
						await new KipperCompiler().compile("5 as str;", { abortOnFirstError: true });
					} catch (e) {
						assert(false, "Expected no 'InvalidConversionTypeError'");
					}
				});

				it("str as num", async () => {
					try {
						await new KipperCompiler().compile('"5" as num;', { abortOnFirstError: true });
					} catch (e) {
						assert(false, "Expected no 'InvalidConversionTypeError'");
					}
				});

				it("bool as str", async () => {
					try {
						await new KipperCompiler().compile("true as str;", { abortOnFirstError: true });
					} catch (e) {
						assert(false, "Expected no 'InvalidConversionTypeError'");
					}
				});

				it("bool as num", async () => {
					try {
						await new KipperCompiler().compile("true as num;", { abortOnFirstError: true });
					} catch (e) {
						assert(false, "Expected no 'InvalidConversionTypeError'");
					}
				});
			});
		});

		describe("ReservedIdentifierOverwriteError", () => {
			it("Error", async () => {
				try {
					await new KipperCompiler().compile(new KipperParseStream("var instanceof: str;"), {
						abortOnFirstError: true,
					});
				} catch (e) {
					assert((<KipperError>e).constructor.name === "ReservedIdentifierOverwriteError", "Expected proper error");
					assert((<KipperError>e).name === "IdentifierError", "Expected proper error");
					assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
					assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
					assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
					assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
					return;
				}
				assert(false, "Expected 'ReservedIdentifierOverwriteError'");
			});

			it("NoError", async () => {
				try {
					await new KipperCompiler().compile('var valid: str = "3";', { abortOnFirstError: true });
				} catch (e) {
					assert(false, "Expected no 'ReservedIdentifierOverwriteError'");
				}
			});
		});

		describe("ReadOnlyTypeError", () => {
			it("Error", async () => {
				try {
					await new KipperCompiler().compile(new KipperParseStream(`const invalid: str = "3"; invalid = "5";`), {
						abortOnFirstError: true,
					});
				} catch (e) {
					assert((<KipperError>e).constructor.name === "ReadOnlyTypeError", "Expected proper error");
					assert((<KipperError>e).name === "TypeError", "Expected proper error");
					assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
					assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
					assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
					assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
					return;
				}
				assert(false, "Expected 'ReadOnlyTypeError'");
			});

			it("NoError", async () => {
				try {
					await new KipperCompiler().compile('var valid: str = "3"; valid = "5";', { abortOnFirstError: true });
				} catch (e) {
					assert(false, "Expected no 'ReadOnlyTypeError'");
				}
			});
		});

		describe("UndefinedConstantError", () => {
			it("Error", async () => {
				try {
					await new KipperCompiler().compile(new KipperParseStream(`const invalid: str;`), { abortOnFirstError: true });
				} catch (e) {
					assert((<KipperError>e).constructor.name === "UndefinedConstantError", "Expected proper error");
					assert((<KipperError>e).name === "UndefinedConstantError", "Expected proper error");
					assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
					assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
					assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
					assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
					return;
				}
				assert(false, "Expected 'UndefinedConstantError'");
			});

			it("NoError", async () => {
				try {
					await new KipperCompiler().compile('const valid: str = "3";', { abortOnFirstError: true });
				} catch (e) {
					assert(false, "Expected no 'UndefinedConstantError'");
				}
			});
		});

		describe("UndefinedReferenceError", () => {
			describe("Error", () => {
				it("Arithmetic assignment", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream(`var x: str; x += "5";`), {
							abortOnFirstError: true,
						});
					} catch (e) {
						assert((<KipperError>e).constructor.name === "UndefinedReferenceError", "Expected proper error");
						assert((<KipperError>e).name === "IdentifierError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'UndefinedReferenceError'");
				});

				it("Arithmetic expression", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream(`var x: num; x + 5;`), {
							abortOnFirstError: true,
						});
					} catch (e) {
						assert((<KipperError>e).constructor.name === "UndefinedReferenceError", "Expected proper error");
						assert((<KipperError>e).name === "IdentifierError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'UndefinedReferenceError'");
				});

				it("Identifier reference", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream(`var x: str; x;`), { abortOnFirstError: true });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "UndefinedReferenceError", "Expected proper error");
						assert((<KipperError>e).name === "IdentifierError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'UndefinedReferenceError'");
				});
			});

			it("NoError", async () => {
				try {
					await new KipperCompiler().compile('var str1: str = "3"; str1 += "5"; str1 = str1 + "5";', {
						abortOnFirstError: true,
					});
				} catch (e) {
					assert(false, "Expected no 'UndefinedReferenceError'");
				}
			});
		});
	});

	describe("Error recovery", () => {
		it("Disabled", async () => {
			const result = await new KipperCompiler().compile(new KipperParseStream(`const invalid: str; 5 + "5";`), {
				recover: false,
			});

			assert(result.errors.length === 1, "Expected one error");
		});

		it("One error", async () => {
			const result = await new KipperCompiler().compile(new KipperParseStream(`const invalid: str; 5 + 5;`), {
				recover: true,
			});

			assert(result.errors.length === 1, "Expected one error");
		});

		it("Two errors", async () => {
			const result = await new KipperCompiler().compile(new KipperParseStream(`const invalid: str; 5 + "5";`), {
				recover: true,
			});

			assert(result.errors.length === 2, "Expected two errors");
		});

		it("Three errors", async () => {
			const result = await new KipperCompiler().compile(
				new KipperParseStream(`const invalid: str; 5 + "5"; print as str;`),
				{ recover: true },
			);

			assert(result.errors.length === 3, "Expected three errors");
		});
	});
});
