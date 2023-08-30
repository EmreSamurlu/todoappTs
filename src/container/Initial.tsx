import React, {FC, useEffect} from 'react';

import {setToday} from '@features';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '../redux/store';

export interface InitialProps {
  children: React.ReactNode;
}

const Initial: FC<InitialProps> = ({children}) => {
  const dispatch = useDispatch();
  const {today} = useSelector((state: RootState) => state.calendar);

  useEffect(() => {
    if (!today) {
      dispatch(setToday(moment().format('MMMM DD, YYYY')));
    }
  }, [dispatch, today]);

  return children;
};

export default Initial;
