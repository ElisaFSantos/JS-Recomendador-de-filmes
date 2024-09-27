text(recomendacao, width / 3, height / 2);
}

function geraRecomendacao(idade, gostaDeSuspense, gostaDeRomance, gostaDeDrama, gostaDeComedia, gostaDeMisterio, gostaDeTerror, gostaDeAnimacao, gostaDeAventura, gostaDeFantasia) {
      if (idade >= 18){
        return "Clube da Luta";
      } else if(gostaDeTerror){
          return "MaXXXine";
      } else if(gostaDeMisterio || gostaDeTerror || gostaDeSuspense){
          return "Midsommar: O Mal Não Espera a Noite 2019"
      } 
        else if(idade >= 14){
          if(gostaDeTerror){
            return "Corra!";
          } else if(gostaDeDrama){
            return "O Pior Vizinho do Mundo";
          } else if(gostaDeRomance){
            return "A mentira";
          }
        } else if (idade >= 16){
          return "Cisne Negro";
        } else if(gostaDeRomance){
             return "Por Lugares Incríveis";
        } else if(gostaDeMisterio || gostaDeDrama) {
            return "Ilha do Medo";
          } else if(idade >= 12){
            return "O Show de Truman";
          } else if(gostaDeRomance){
      return "10 Coisas que EU odeio em Você";
    } else if(gostaDeDrama){
        return "Que Horas Ela Volta?";
    } else if (idade >= 10){
      return "O Rei Leão";
    } else if(gostaDeAnimacao || gostaDeFantasia){
          return "Coraline e o Mundo Secreto";
          } else if(gostaDeAnimacao || gostaDeTerror){
              return "Frankenweenie";
            } else if(idade <= 10){
          return "UP altas aventuras";
        } else if(gostaDeAventura || gostaDeAnimacao){
            return "Divertidamente";
          } else if(gostaDeFantasia || gostaDeAventura){
              return "Pinóquio";
            }
}