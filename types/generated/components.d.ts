import type { Schema, Attribute } from '@strapi/strapi';

export interface CorporateFdCorporateFdHeader extends Schema.Component {
  collectionName: 'components_title_corporate_fd_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface CorporateFdFaq extends Schema.Component {
  collectionName: 'components_corporate_fd_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'information';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.Text;
  };
}

export interface CorporateFdFdInterestChart extends Schema.Component {
  collectionName: 'components_corporate_fd_fd_interest_charts';
  info: {
    displayName: 'FD Interest Chart';
    icon: 'apps';
  };
  attributes: {
    CompanyName: Attribute.String & Attribute.Required;
    Rating: Attribute.String;
    twelveMonths: Attribute.Decimal;
    fifteenMonths: Attribute.Decimal;
    eighteenMonths: Attribute.Decimal;
    twentyTwoMonths: Attribute.Decimal;
    twentyFourMonths: Attribute.Decimal;
    thirtyMonths: Attribute.Decimal;
    thirtySixMonths: Attribute.Decimal;
    fortyFourMonths: Attribute.Decimal;
    fortyEightMonths: Attribute.Decimal;
    sixtyMonths: Attribute.Decimal;
    DownloadForm: Attribute.Media;
  };
}

export interface CorporateFdKeyFeature extends Schema.Component {
  collectionName: 'components_corporate_fd_key_features';
  info: {
    displayName: 'Key Feature';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    icon: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'corporate-fd.corporate-fd-header': CorporateFdCorporateFdHeader;
      'corporate-fd.faq': CorporateFdFaq;
      'corporate-fd.fd-interest-chart': CorporateFdFdInterestChart;
      'corporate-fd.key-feature': CorporateFdKeyFeature;
    }
  }
}
