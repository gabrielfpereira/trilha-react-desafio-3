import { useForm } from 'react-hook-form';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import { Container, Title, Column, Row, Wrapper, Heading, SubTitle, Small, LinkLogin } from './styles';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {
  const  navigate  =  useNavigate()

  const { control, handleSubmit, formState: { errors  } } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
  });

  function onSubmit(formData){

    if(!formData.name || !formData.email || !formData.password){
      alert('Preencha os campos!')
      return;
    } else{
      alert(`Usuário: ${formData.name}, Email: ${formData.email} Cadastrado!`)
    }

    console.log(errors)
  }


  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Row>
            <Column>
              <Heading>
              A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
              </Heading>
            </Column>
            
            <Column>
            <Title>Comece agora grátis</Title>
            <SubTitle>Crie sua conta e make the change._</SubTitle>
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <Input control={control} leftIcon={<FaUserAlt color='#8647AD' />} name="name" placeholder="Nome Completo" type="text" />
                <Input control={control} leftIcon={<MdEmail color='#8647AD' />} name="email" placeholder="Email" type="email" />
                <Input control={control} leftIcon={<RiLockPasswordFill color='#8647AD' />} name="password" placeholder="Senha" type="password" />

                <Button title="Criar minha conta" variant="secondary" type="submit" />
              </form>
              <SubTitle>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubTitle>
              <Small>
                Já tenho conta. 
                <LinkLogin onClick={() => navigate('/login')}> Fazer login </LinkLogin> 
              </Small>
            </Column>
          </Row>
        </Wrapper>
      </Container>
    </>
  )
}

export default Cadastro