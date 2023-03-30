import api from "@/utils/api";
import router from "@/router";
import jwtDecode from "jwt-decode";


export default {
    //state commit контексты приложения
    async toLogin({state, commit}){
        try{
            const {email, password} = state.form;
            const {data} = await api.post('user/login', {email, password});
            // const data = {access_token: '123', refresh_token: '321', refreshIn: 3000};
            localStorage.setItem('access_token', data?.data?.access);
            localStorage.setItem('refresh_token', data?.data?.refresh);
            const a = jwtDecode(data?.data?.access);
            //из ауфа вызываю мутацию в модуль юзера, root true позволяют идти из корня стора
            // commit позволит нам вызвать метод commit внутри наших действий
            commit('user/CHANGE_VALUE_BY_FIELD', {field: 'user', value: a.user_info}, { root: true })
            // перенаправляем на страницу профиля
            await router.push('/profile')
        }
        catch (e){
            console.log(e)
        }


    }
}