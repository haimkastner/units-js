import { TwoByteIdGenerator } from '../../../../id-generator';
import { HighLevelTsc } from '../high-level-tsc';
import { BaseMathStringBuilderNode } from './math-string-builder-node';
import ts from 'typescript';

/**
 * A node representing a constant value, such as `5` or `Math.PI`
 *
 * @export
 * @class ConstantNode
 * @extends {BaseMathStringBuilderNode}
 */
export class ConstantNode extends BaseMathStringBuilderNode {
    public readonly isPrimitive: boolean = true;

    public constructor(idGenerator: TwoByteIdGenerator, private readonly _value: string) {
        super(idGenerator);
    }

    public execute(): ts.Statement[] {
        return [HighLevelTsc.createNumericLiteralExpressionStatement(this._value)];
    }
}
