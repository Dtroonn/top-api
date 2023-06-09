import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { ReviewModel, ReviewModelSchema } from './review.model';

@Module({
	imports: [MongooseModule.forFeature([{ name: ReviewModel.name, schema: ReviewModelSchema }])],
	controllers: [ReviewController],
	providers: [ReviewService],
})
export class ReviewModule {}
