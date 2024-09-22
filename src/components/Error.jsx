import { Link } from "react-router-dom";

function Error() {
    return(

        <div class="error">
        <div class="container">
            <div class="error-title">Не удалось подклюситься к серверу :/ </div>
            <div class="error-info">Проверте подключение к интернету. Возможно сервер отключен или временно не работает</div>
            <Link to="/main" class="refresh">Обновить</Link >
        </div>
    </div>


    );
}

export default Error;
