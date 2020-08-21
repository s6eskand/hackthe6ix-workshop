// sagas
import authSagas from "./auth";
import mainSagas from "./main";

const sagas = [
    authSagas,
    mainSagas,
];

const registerSagas = (middleware) => {
    sagas.map((saga) => {
        middleware.run(saga);
    });
};

export default registerSagas;