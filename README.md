<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Quiz para programadores.</title>
    </head>
    <body>
                            <header>
            <h1>Quiz interativo para programadores.</h1>
                <p>Testes seus conhecimentos em programacão e veja qual pontuação você consegue fazer!</p>
                        </header>
                    <main>
            <!--Introdução-->
             <section>
            <h2>Sobre esse quiz</h2>
                <p><strong>Este quiz</strong> foi desenvolvido para testar seus conhecimentos em programação,como <em>linguagens de programção</em>,conceitos basicos e mais.</p>

                <p>Você encontrará diferentes tipos de pergunta, incluindo múiltipla escolha, texto e perguntas de data. <br>Desafie-se com este quiz!</br></p>

                <p>Você poderá encontrar alguns acrônimos como <abbr title="HyperText Marup Language">HTML</abbr> E <abbr title="Cascading Style Sheets">CSS</abbr>, que seção comumente usados em questçoes relacionadas ao desenvolvimento web.</p>
             </section>
            <!--Pergunta 1:múltipla escolha-->
             <section>
                <h2>Pergunta 1: Qual linguagem é usada para estruturar paginas WEB?</h2>
                <form>
                    <input type="radio" value="Python" id="p1a" name="pergunta1">
                    <label for="p1a">Python</label><br>
                    
                    <input type="radio" value="HTML" id="p1b" name="pergunta1">
                    <label for="p1b">HTML</label><br>
                    
                    <input type="radio" value="Javascript" id="p1c" name="pergunta1">
                    <label for="p1c">Javascript</label><br>
                    
                    <input type="radio" value="Ruby" id="p1d" name="pergunta1">
                    <label for="p1d">Ruby</label><br>
                </form>
            </section>
            <!--Pergunta 2:Texto-->
            <section>
                <h2>Pergunta 2: Na URL https://www.google.com o trecho " é o _________</h2>
               <form>
                    <input type="text" id="p2" name="pergunta2" placeholder="Digite sua resposta..." >  
                                 
                </form>

            </section>
            <!--Pergunta 3:Senha-->
            <section>
                <h2>Pergunta 3 : Escreva um exemplo de senha forte!</h2>
                <form>
                    <input type="password" id="p3" name="pergunta 3" placeholder="Digite uma senha..."> 
                </form>
            </section>
            <!--Pergunta 4:DATA-->
            <section>
                <h2>Pergunta 4: Em que ano HTML lançou sua primeira versão</h2>
                <form>
                    <input type="date" id="p4" name="pergunta4">
                </form>

            </section>
            <!--Pergunta 5:Seleção múltipla-->
            <section>
                <h2>Quais dessa tecnologias são consideradas linguagens de programação:</h2>
    <!--01-->
                <form>
                    <input type="checkbox" id="p5a" name="pergunta5" value="Javascript">
                <label for="p5a">Javascript</label>
                </form>
     <!--02-->
                <form>
                    <input type="checkbox" id="p5b" name="pergunta5" value="HTML">
                <label for="p5b">HTML</label>
                </form>
     <!--03-->
                <form>
                    <input type="checkbox" id="p5c" name="pergunta5" value="Java">
                <label for="p5c">Java</label>
                </form>
     <!--04-->
                <form>
                    <input type="checkbox" id="p5d" name="pergunta5" value="CSS">
                <label for="p5d">CSS</label>
                </form>


            </section>
            <!--Pergunta 6:UPLOAD-->
            <section>
                <h2>Faça um upload de um arquivo contendo código HTML!</h2>
                <form>
                    <input type="file">
                </form>
            </section>
            <!--Pergunta 7:Menususpenso-->
            <section>
                <h2>Pergunta 7 : Selecione o atributo do input que define seu tipo:</h2>
                <form>
                    <select name="pergunta7" id="p7">
                        <option value="id">ID</option>
                        <option value="type">Type</option>
                        <option value="placeholder">PlaceHolder</option>
                    </select>
                </form>

            </section>
            <!--Pergunta 8:Imagem-->
            <section>
                <h2>Qual linguagem de programacao é representada pelo logotipo abaixo?</h2>
                <figure>
                    <img src="./assests/image.png" alt="Logotipo de uma linguagem de programação"><br>
                    <figcaption>Figura 1: Logotipo de uma linguagem de programação</figcaption><br>
                <input type="text" id="p8" name="pergunta8" placeholder="Digite sua resposta..">
            </figure>
            </section>
            <!--tabela de pontuação-->
            <section>
                <h2>Tabela de Pontuação</h2>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Pontuação</th>
                            <th>Avaliação</th>
                        </tr>
                    </thead>
                        <tbody>

                        
                <tr>
                    <td>0-2</td>
                    <td>Não desista! Cada tentantiva pe uma oportunidade de você aprender! </td>
                    </tr>
                    
                    <tr>
                    <td>3-4</td>
                    <td>Você ainda precisa melhorar! Vamos estudar mais!!!</td>
                    </tr>

                    <tr>
                    <td>5-7</td>
                    <td>BOM! Seu conhecimento em programação está satisfatório </td>
                        </tr>
                        <tr>
                        <td>08</td>
                        <td>Otímo! Você esta muito bem informado!!</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="2">Boa sorte na próxima!!!</td>
                        </tr>
                    </tfoot>
                </table>
            </section>
            <!--LISTA DE RESPOSTAS-->
            <section>
                <h2>Verifique suas respostas</h2>
                <details>
                    <summary>RESPOSTAS "Clique Aqui"</summary>
                    <ol>
                        <li>HTML</li>
                        <li>Domínio</li>
                        <li>A@12asdkloi</li>
                        <li>1991</li>
                        <li>Javascrip,Java</li>
                        <li>Aruivo de ter extensão .html</li>
                        <li>Type</li>
                        <li>Java</li>
                    </ol>
                </details>
            </section>
            <!--Comentarios-->
            <section>
                <h4>Nos dê seu FEEDBACK
                    <form>
            <fieldset>
                <legend>Informações de contato</legend>

                <label for="name">Nome:</label>
                <input type="text" id="name" name="name"><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email"><br>
                <br>
                
                <br><label for="comentarios">Comentarios: <br> </label>
                <textarea id="comentario" name="comentario">
                </textarea><br>
                <button onclick="alert('FEEDBACK ENVIADO!')"">Envie o feedback</button>
            </fieldset>
                    </form>
                </h2>
            </section>
                </main>
            <footer>
        <p>Quiz de programação todos os direitos reservados.Site feito por <strong>Hugo Wenner.</strong></p>
        <p>Para conhecer outros quizzes <a href="https://google.com" target="_blank">Clique aqui.</p></a>
        </footer>
    </body>
</html>
