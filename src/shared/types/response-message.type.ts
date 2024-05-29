import { PathImpl2 } from '@nestjs/config';
import { I18nTranslations } from 'src/resources/generated/i18n.generated';
import { TranslationObjectI } from 'src/shared/interfaces/general/translation-object.interface';

export type ResponseMessage = PathImpl2<I18nTranslations> | TranslationObjectI;
