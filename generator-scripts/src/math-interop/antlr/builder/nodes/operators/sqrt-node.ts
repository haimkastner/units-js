import { TwoByteIdGenerator } from '../../../../../id-generator';
import { HighLevelTsc, UnaryOperatorType } from '../../high-level-tsc';
import { MathStringBuilderNode, BaseMathStringBuilderNode } from '../math-string-builder-node';
import ts from 'typescript';

export class SqrtNode extends BaseMathStringBuilderNode {
    public readonly isPrimitive: boolean = false;

    public constructor(idGenerator: TwoByteIdGenerator, private readonly _value: MathStringBuilderNode) {
        super(idGenerator);
    }

    public execute(): ts.Statement[] {
        return HighLevelTsc.buildUnaryOperator(this.id, UnaryOperatorType.Sqrt, this._value);
    }
}
