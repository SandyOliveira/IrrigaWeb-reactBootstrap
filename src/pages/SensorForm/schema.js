import * as Yup from "yup";

export default Yup.object().shape({
  nameRele: Yup.string().required(),
  nameSensor: Yup.string().required(),
  nameAtuador: Yup.string().required(),
});
