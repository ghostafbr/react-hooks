import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';

const user = {
  id: 1234,
  name: 'Bolaños',
  email: 'asdf@gmail.com',
};
const onSettUserMock = jest.fn();
// const onToggleTodoMock = jest.fn();

beforeEach(() => jest.clearAllMocks());

describe('Tests in the <LoginPage />', () => {
  test('should show the component without the user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('should call setUser Function', () => {
    render(
      <UserContext.Provider value={{ user: null, setUser: onSettUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const setUserButton = screen.getByRole('button');
    fireEvent.click(setUserButton);
    expect(onSettUserMock).toHaveBeenCalled();
    expect(onSettUserMock).toHaveBeenCalledWith({
      id: 3,
      name: 'Juan',
      email: 'juan@gmail.com',
    });

    // screen.debug();
  });
});
