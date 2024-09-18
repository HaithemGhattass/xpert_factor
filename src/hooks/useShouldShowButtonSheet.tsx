import { useNavigationState } from '@react-navigation/native';

const useShouldShowButtonSheet = () => {
  const routeName = useNavigationState(state => state?.routes[state.index]?.name);
  return ['Home', 'Bordoreaux','BordoreauxForm',"Profile","MyAccount" ,"Settings","Notifications","ResetPassword"].includes(routeName);
};

export default useShouldShowButtonSheet;
