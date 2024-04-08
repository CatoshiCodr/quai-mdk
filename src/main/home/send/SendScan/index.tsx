import React from 'react';

import {
  QuaiPayCamera,
  QuaiPayContactBottomSheet,
  QuaiPayContent,
} from 'src/shared/components';

const SendScanScreen: React.FC = () => {

  return (
    <QuaiPayContent noNavButton hasBackgroundVariant>
      <QuaiPayCamera />
      <QuaiPayContactBottomSheet />
    </QuaiPayContent>
  );
};

export default SendScanScreen;
