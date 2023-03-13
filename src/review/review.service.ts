import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReviewModel, ReviewModelType } from './review.model';

@Injectable()
export class ReviewService {
	constructor(@InjectModel(ReviewModel.name) private readonly reviewModel: ReviewModelType) {}

	async create(): Promise<ReviewModel> {
		return this.reviewModel.create({});
	}
}
