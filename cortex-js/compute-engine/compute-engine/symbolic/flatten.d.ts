/* 0.22.0 */
/**
 * Flatten the arguments.
 */
export declare function flattenOps(ops: BoxedExpression[], head: string): BoxedExpression[];
export declare function flattenSequence(xs: BoxedExpression[]): BoxedExpression[];
export declare function flattenDelimiter(ce: IComputeEngine, body: undefined | BoxedExpression): BoxedExpression;