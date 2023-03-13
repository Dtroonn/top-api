import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';

export type AuthModelType = Model<HydratedDocument<AuthModel>>;

@Schema({
	collection: 'auth',
	timestamps: true,
})
export class AuthModel {
	@Prop({ unique: true })
	email: string;

	@Prop()
	passwordHash: string;
}

export const AuthModelSchema = SchemaFactory.createForClass(AuthModel);
