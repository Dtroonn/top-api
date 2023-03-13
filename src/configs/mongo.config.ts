import { ConfigService } from '@nestjs/config';
import { MongooseModuleFactoryOptions } from '@nestjs/mongoose';

export const getMongoConfig = (configService: ConfigService): MongooseModuleFactoryOptions => {
	return {
		uri: getMongoUri(configService),
	};
};

const getMongoUri = (configService: ConfigService): string => {
	return `mongodb://${configService.get('MONGO_USERNAME')}:${configService.get(
		'MONGO_PASSWORD',
	)}@${configService.get('MONGO_HOST')}:${configService.get('MONGO_PORT')}/${configService.get(
		'MONGO_AUTHDATABSE',
	)}`;
};
