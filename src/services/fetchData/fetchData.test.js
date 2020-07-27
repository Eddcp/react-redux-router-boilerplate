import axios from 'axios';
 
import { fetchData, API } from './fetchData';
 
jest.mock('axios');
 
describe('fetchData', () => {
  it('fetches successfully data from an API', async () => {
    const data = {
        docs: [
                {
                    _id: "5cf5805fb53e011a64671582",
                    name: "The Fellowship Of The Ring"
                },
                {
                    _id: "5cf58077b53e011a64671583",
                    name: "The Two Towers"
                },
                {
                    _id: "5cf58080b53e011a64671584",
                    name: "The Return Of The King"
                }
        ],
        pages: {
            current: 1,
            prev: 0,
            hasPrev: false,
            next: 2,
            hasNext: false,
            total: null
        },
        items: {
            begin: null,
            end: null,
            total: 3
        }
    };
 
    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    expect(axios.get).toHaveBeenCalledWith(
        `${API}/book`,
      );
    
    await expect(fetchData()).resolves.toEqual(data);
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';
 
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );

    await expect(fetchData()).rejects.toThrow(errorMessage);
  });
});