import React from "react"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useForm from "../hooks/useForm"
import { useHistory } from "react-router";
import useUnProtectedPage from "../hooks/useUnprotectedPage";
import { BASE_URL } from "../Constants/url";
import { goToFeed } from "../Routes/Coordinator";
import axios from "axios"


const SignUpPage = () => {

    useUnProtectedPage()

    const history = useHistory()

    const goToLoginPage = () => {
        history.push("/")
    }
    
    const [form, onChange, clear] = useForm({
        name: "",
        email: "",
        cpf: "",
        password: "",

    })

    const onSubmitForm = (e) => {
        e.preventDefault()
        signUp()

    }

    const signUp = () => {
        axios.post(`${BASE_URL}/rappi4/signup`, form)
        .then((res) => {

            localStorage.setItem("token", res.data.token)
            clear()
            goToFeed(history)
        })
        .catch((erro) => {
            alert("Erro no cadastro", erro)
            console.log(erro)

        })
    }
    return (
        
        <Container component="main" maxWidth="xs">
            <button onClick={goToLoginPage}>Login</button>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              
            </Avatar>
            <Typography component="h1" variant="h5">
              Cadastra-se
            </Typography>
            <Box component="form" onSubmit={onSubmitForm} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                fullWidth
                label={"Nome"}
                name={"name"}
                value={form.name}
                onChange={onChange}
                variant={"outlined"}
                type={"name"}
                required
              />
              <TextField
                margin={"normal"}
                required
                fullWidth
                name={"email"}
                value={form.email}
                onChange={onChange}
                label={"E-mail"}
                type={"email"}
                variant={"outlined"}
              />

                <TextField
                margin="normal"
                fullWidth
                label={"CPF"}
                name={"cpf"}
                value={form.cpf}
                onChange={onChange}
                variant={"outlined"}
                type={"cpf"}
                required
              />

                <TextField
                margin="normal"
                fullWidth
                label={"Senha"}
                name={"password"}
                value={form.password}
                onChange={onChange}
                variant={"outlined"}
                type={"password"}
                required
              />
              
              <Button
                  type="submit"
                fullWidth
                variant={"contained"}
                sx={{ mt: 3, mb: 2 }}
              >
                Cadastrar
              </Button>
              
            </Box>

          </Box>
          
        </Container>
      
    );
  }

export default SignUpPage 