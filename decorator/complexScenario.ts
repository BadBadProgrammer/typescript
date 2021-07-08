type Validator = (x: any) => boolean;

// save the marks
const validateMap: Record<string, Validator[]> = {};

// 1. 标记需要检查的参数
function typedDecoratorFactory(validator: Validator): ParameterDecorator {
    return (_, key, index) => {
        const target = validateMap[key as string] ?? [];
        target[index] = validator;
        validateMap[key as string] = target;
    }
}

function validate(_: Object, key: string, descriptor: PropertyDescriptor) {
    const originalFn = descriptor.value;
    descriptor.value = function  (...args: any[]) {

        // 2. 运行检查器
        const validatorList = validateMap[key];
        if (validatorList) {
            args.forEach((arg, index) => {
                const validator = validatorList[index];

                if (!validator) return;

                const result = validator(arg);

                if (!result) {
                    throw new Error(
                        `Failed for parameter: ${arg} of the index: ${index}`
                    );
                }
            });
        }

        // 3. 运行原有的方法
        return originalFn.call(this, ...args);
    }
}

const isInt = typedDecoratorFactory((x) => Number.isInteger(x));
const isString = typedDecoratorFactory((x) => typeof x === 'string');

class G {
    @validate
    sayRepeat(@isString word: string, @isInt x: number) {
        return Array(x).fill(word).join('');
    }
}

const g = new G();
g.sayRepeat('hello', 2); // pass
g.sayRepeat('', 'lol' as any); // throw an error
