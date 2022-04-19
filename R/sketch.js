var n = 0, a = 0
var v, v2
var resul = [], r = 0, Tn, valor1 = ""
function preload(){
  
}

function setup(){
  createCanvas(600,400);
  
}
// 1 = I
// 5 = V
// 10 = X
// 50 = L
// 100 = C
// 500 = D
// 1000 = M
var I=0, V=0, X=0, L=0, C=0, D=0, M=0;
function draw(){
  //numero
  background(250)
  if (a == 0){
    textSize(20)
    text("Digite o valor",0, 60)
    text("Use os numeros(os que possuem um simbolo em cima)", 0, 100)
    text("*Aperte espaço para apagar tudo que escreveu*", 0, 140)
    text("*Recarregue a página para usar novamente*", 0, 180)
    text("Numero = " + n, 0, 220)
    if (keyWentDown("space")){
      n = 0
    }
  if (keyWentDown(48)){
    n = n * 10
  }
  if (keyWentDown(49)){
    n = n * 10
    n = n + 1
  }
  if (keyWentDown(50)){
    n = n * 10
    n = n + 2
  }
  if (keyWentDown(51)){
    n = n * 10
    n = n + 3
  }
  if (keyWentDown(52)){
    n = n * 10
    n = n + 4
  }
  if (keyWentDown(53)){
    n = n * 10
    n = n + 5
  }
  if (keyWentDown(54)){
    n = n * 10
    n = n + 6
  }
  if (keyWentDown(55)){
    n = n * 10
    n = n + 7
  }
  if (keyWentDown(56)){
    n = n * 10
    n = n + 8
  }
  if (keyWentDown(57)){
    n = n * 10
    n = n + 9
  }
  if (keyWentDown("enter") && n < 4000){
    n =n
    a = 1
  }
  if(keyWentDown("enter") && n >= 4000){
    a = -1
  }
}
if (a == -1){
  textSize(20)
  text("Esse valor é muito alto", 200, 200)
}
if (a == 1 ){//pegando os numeros
if(n >= 1000){
  n = n - 1000
M = M + 1
}
else if(n >= 500){
  n = n - 500
D = D + 1
}
else if (n >= 100){
n = n - 100
C = C + 1
}
else if (n >= 50){
  n = n - 50
  L = L + 1
}
else if (n >= 10){
  n = n - 10
  X = X + 1
}
else if(n >= 5){
  n = n - 5
  V = V + 1
}
else if (n >= 1){
  n = n - 1
  I = I + 1
}
else if(n == 0){
  a = 2
}
}
if (a == 2){//troca dos numeros
  if(I == 5){
    I = I - 5
  V = V + 1
  }
  else if(V == 2){
    V = V - 2
  X = X + 1
  }
  else if(X == 5){
    X = X - 5
  L = L + 1
  }
  else if(L == 2){
    L = L - 2
  C = C + 1
  }
  else if(C == 5){
    C = C - 5
  D = D + 1
  }
  else if(D == 2){
    D = D - 2
  M = M + 1
  }
  else if(I<=5 && V<=5 && X<=5 && L<=5 && C<=5 && D<=5){
    a = 3
  }
}
if (a == 3){
  console.log(I +""+ V +""+ X +""+ L +""+ C +""+ D +""+ M)
 
  
 
 

  if(M >=1){
    M = M - 1
   resul.push("M")
   }
   
   else if(D >=1 && D <=3 && !(C >=4 && D >= 1)){
   D = D - 1
   resul.push("D")
   }
   
    else if(C >=1 && C <=3 && !(C >=4 && D >= 1)){
   C = C - 1
   resul.push("C")
   }
   if (C ==4 && !(C >=4 && D >= 1)){
    C = C - 4
    resul.push("CD") // 400
    }
    if (C >=4 && D >= 1){
      C = C - 4
   D = D - 1
      resul.push("CM") // 900
      }

   
   else if(L >=1 && L <=3 && !(X >= 4 && L >= 1)){
   L = L - 1
   resul.push("L")
   }
   
   
   else if(X >=1 && X <=3 && !(X >= 4 && C >= 1) && !(X >= 4 && L >= 1)){
   X = X - 1
   resul.push("X")
   }
   if (X >= 4 && L >= 1){
    L = L - 1
   X = X - 4
      resul.push("XC") // 90
      }

   if (X ==4 && !(X >= 4 && C >= 1)){
    X = X - 4
    resul.push("XL") // 40
    }
   
   else if(V >=1 && V <=3 && !(I >= 4 && V >= 1)){
   V = V - 1
   resul.push("V")
   }
   if (I >=4 && V >= 1){
    I = I - 4
 V = V - 1
    resul.push("IX") // 9
    }
   
   else if (I >=1 && I <= 3){
   I = I - 1
   resul.push("I")
   }
   
    if (I ==4){
      I = I - 4
      resul.push("IV") // 4
      }

            
              
             
              
              
              
else if(I==0 && V==0 && X==0 && L==0 && C==0 && D==0 && M==0){
a = 4
}
  
}
if (a == 4){
  textSize(20)
  text("*Ignore a vírgula*", 0, 160)
  text("Valor(romano): "+resul, 10, 200)
}
}
