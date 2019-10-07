import { createSlice } from 'redux-starter-kit';

const userSlice = createSlice({
    slice: 'user',
    initialState: { token: null },
    reducers: {
        setToken: (state, action) => {
            // fake set token
            state.token = 'khsdagjfh23uy273yuewdyxiy943yr9d84yriusae98243r9ctyrolgreu;OIUQWOE9UQQWEQ'
        }
    }
});

export default userSlice;