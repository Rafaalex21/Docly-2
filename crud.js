

const cursos = {
    

    
    cursosCod:[
        {
            courseID:1,
            courseName: "Analise e desenvolvimento de sistemas",
            dataCriacao: "15/08/2022",
            tipoCurso: "Tecnologo",
            ead: true 
        }

    ]




}
//create
function criarCurso(dados){
    cursos.cursosCod.push({
        courseID: cursos.cursosCod.length +1 ,
        courseName: dados.courseName,
        dataCriacao: dados.dataCriacao,
        tipoCurso: dados.tipoCurso,
        ead: dados.ead

    })
   




}
criarCurso({ courseName: "Ciencias da Computacao", dataCriacao:"30/01/2019",tipoCurso:"Bacharelado",ead:false})
criarCurso({ courseName: "Tecnologia de informação e comunicação", dataCriacao:"27/03/2018",tipoCurso:"Licenciatura",ead:false})
criarCurso({ courseName: "Desenvolvimento Back-end", dataCriacao:"06/08/2021",tipoCurso:"Tecnologo",ead:true})


//read
//console.log(cursos.cursosCod)
function pegaCurso(){
    return cursos.cursosCod;

}
console.log(pegaCurso())

//update
function updateNomeCurso(courseID, newName){
    const cursoQueSeraAtt = pegaCurso().find((cursosCod) => {
        return cursosCod.courseID === courseID;

    });
    console.log(cursoQueSeraAtt)
    cursoQueSeraAtt.courseName = newName

}
updateNomeCurso(1, "ADS")
console.log(pegaCurso())
// delete
function apagaCurso(courseID){
    const listaDeCursosAtualizada = pegaCurso().filter((cursoAtual) => {

        return cursoAtual.courseID !== courseID;
    })
    cursos.cursosCod = listaDeCursosAtualizada
    



}
apagaCurso(1);
console.log(pegaCurso())