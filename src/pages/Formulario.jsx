import styled from "styled-components";
import { Btnoperaciones } from "../components/Btnoperaciones";
import { FcPicture } from "react-icons/fc";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { ValidarOtaku } from "../utils/validarOtaku";
export function Formulario() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,watch
  } = useForm({defaultValues:{
    descripcion:"psg",correo:"@gmail.com",precio:54,otaku:"eres otaku"
  }});
  function insertar(data) {
    swal("correo", data.correo);
    reset();
  }

  return (
    <Container>
      <div className="sub-contenedor">
        <div className="header">
          <h1>📤Registro</h1>
          <h1>Viendo: {watch("descripcion")}</h1>
        </div>

        <form className="entradas" onSubmit={handleSubmit(insertar)}>
          <ContainerInputs>
            <div className="subcontainer">
              <h4>Descripción:</h4>
              <Inputs
                placeholder="Ingrese una descripción"
                type="text"
                {...register("descripcion", {
                  required: true,
                  minLength: 2,
                  maxLength: 20,
                })}
              />
              {errors.descripcion?.type === "required" && (
                <p>💩Ingrese una descripcion</p>
              )}
              {errors.descripcion?.type === "minLength" && (
                <p>💩Ingrese como minimo 2 caracteres</p>
              )}
              {errors.descripcion?.type === "maxLength" && (
                <p>💩Ingrese como maximo 20 caracteres</p>
              )}
            </div>
          </ContainerInputs>
          <ContainerInputs>
            <div className="subcontainer">
              <h4>Precio:</h4>
              <Inputs
                step="0.01"
                type="number"
                placeholder="Ingrese un precio"
                {...register("precio", { required: true, valueAsNumber: true })}
              />
              {errors.precio?.type === "required" && (
                <p>💩Ingrese por favor un precio</p>
              )}
              {errors.precio?.type === "valueAsNumber" && (
                <p>💩Ingrese un numero valido</p>
              )}
            </div>
          </ContainerInputs>
          <ContainerInputs>
            <div className="subcontainer">
              <h4>Correo</h4>
              <Inputs
                type="text"
                placeholder="Ingrese correo"
                {...register("correo", {
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,required:true
                })}
              />
              {errors.correo?.type === "pattern" && (
                <p>💩El formato del correo no es valido</p>
              )}
                {errors.correo?.type === "required" && (
                <p>💩El correo  es requerido</p>
              )}
            </div>
          </ContainerInputs>
          <ContainerInputs>
            <div className="subcontainer">
              <h4>Otaku</h4>
              <Inputs
                type="text"
                placeholder="Ingrese su edad"
               {...register("otaku",{required:true,validate:ValidarOtaku})}
              />
              {
                errors.otaku &&  <p>No eres otaku</p>
              }
              
            </div>
          </ContainerInputs>
        
          <div className="footercontent">
            <Btnoperaciones titulo="enviar" icono={<FcPicture />} />
          </div>
        </form>
      </div>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .sub-contenedor {
    width: 100%;
    background-color: #e7ebf0;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 0px 20px;
    .header {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
    }
    .pictureContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      flex-direction: column;
      img {
        width: 100px;
        object-fit: cover;
      }
      input {
        display: none;
      }
    }
    .entradas {
      .footercontent {
        display: flex;
        align-items: center;
        height: 100%;
        gap: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
        justify-content: center;
      }
    }
  }
`;

const ContainerInputs = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  .subcontainer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
const Inputs = styled.input`
  border: 2px solid #e8e8e8;
  padding: 15px;
  border-radius: 10px;
  background-color: #212121;
  font-size: small;
  font-weight: bold;
  text-align: center;
  color: white;
  text-align: start;
  width: 70%;
  &:focus {
    outline-color: white;
    background-color: #212121;
    color: #e8e8e8;
    box-shadow: 5px 5px #888888;
  }
`;
