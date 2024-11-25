import { greet } from "@/utils/greet"; // eslint: 正常

const message = greet("World");
console.log(message);

const unusedVar = 42; // eslint: 未使用変数

function misspelledFunction(a, b) {
    // eslint: 関数名のタイプミス（規則に反する）
    return a + b;
}

misspelledFunction();
