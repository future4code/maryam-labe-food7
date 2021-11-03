import React from "react"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useForm from "../hooks/useForm"
import { useHistory } from "react-router";
import { goToFeed, goToSignUp } from "../Routes/Coordinator"
import axios from "axios"
import { BASE_URL } from "../Constants/url"
import useUnProtectedPage from "../hooks/useUnprotectedPage";


const LoginPage = () => {
    useUnProtectedPage()
    
    const history = useHistory()
    
    const [form, onChange, clear] = useForm({
        email: "",
        password: ""
    })

    const onSubmitForm = (e) => {
        e.preventDefault()
        login()

    }

    const login = () => {
        axios.post(`${BASE_URL}/rappi4/login`, form)
        .then((res) => {

            localStorage.setItem("token", res.data.token)
            clear()
            goToFeed(history)
        })
        .catch((erro) => {
            alert("Erro no login")

        })
    }


    return (
        
          <Container component="main" maxWidth="xs">
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
                Sign in
              </Typography>
              <Box component="form" onSubmit={onSubmitForm} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  fullWidth
                  label={"E-mail"}
                  name={"email"}
                  value={form.email}
                  onChange={onChange}
                  variant={"outlined"}
                  type={"email"}
                  required
                />
                <TextField
                  margin={"normal"}
                  required
                  fullWidth
                  name={"password"}
                  value={form.password}
                  onChange={onChange}
                  label={"Senha"}
                  type={"password"}
                  variant={"outlined"}
                />
                
                <Button
                    type="submit"
                  fullWidth
                  variant={"contained"}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                {/* <Grid container>
                
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Você não tem conta? Criar contar"}
                    </Link>
                  </Grid>
                </Grid> */}
              </Box>

              <Button
                type={"submit"}
                fullWidth
                variant={"text"}
                margin={"normal"}
                onClick={() => goToSignUp(history)}
                  
                >
                  Não tem conta? Cadastre-se
                </Button>
            </Box>
            
          </Container>
        
      );
    }

export default LoginPage 