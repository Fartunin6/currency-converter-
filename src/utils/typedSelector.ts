import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../redux/rootReducer';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypedSelector;
