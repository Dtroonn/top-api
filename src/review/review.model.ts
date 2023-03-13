import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model, now, Types } from 'mongoose';

export type ReviewModelType = Model<HydratedDocument<ReviewModel>>;

class Base {
	@Prop()
	_id: Types.ObjectId;

	@Prop({ default: now() })
	createdAt: Date;

	@Prop({ default: now() })
	updatedAt: Date;
}

@Schema({
	collection: 'Review',
	timestamps: true,
})
export class ReviewModel extends Base {
	@Prop({ required: true })
	name: string;

	@Prop()
	title: string;

	@Prop()
	description: string;

	@Prop()
	rating: number;

	@Prop({ required: true })
	lalka: string;
}

export const ReviewModelSchema = SchemaFactory.createForClass(ReviewModel);
