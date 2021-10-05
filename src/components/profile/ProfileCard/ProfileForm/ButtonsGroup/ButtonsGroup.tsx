import React from 'react';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import * as S from './ButtonsGroup.styles';

interface ButtonsGroupProps {
  setCurrentMenu: (state: string) => void;
}

export const ButtonsGroup: React.FC<ButtonsGroupProps> = ({ setCurrentMenu }) => {
  const { t } = useTranslation();

  return (
    <S.Wrapper>
      <Button type="ghost" onClick={() => setCurrentMenu('main')}>
        {t('common.cancel')}
      </Button>
      <Button htmlType="submit" type="primary">
        {t('common.save')}
      </Button>
    </S.Wrapper>
  );
};