import styled from 'styled-components';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media screen and (max-width: 800px) {
    width: auto;
  }
`;
export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;
export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;
export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  @media screen and (max-width: 800px) {
    font-size: 24px;
  }
`;
export const StripeCheckoutButtonContainer = styled(StripeCheckoutButton)`
  margin-left: auto;
  margin-top: 50px;
`;

export const TestWarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;
