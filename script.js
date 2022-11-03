const form = document.getElementById('formulario')

form.addEventListener('submit', function (ev){
    ev.preventDefault()

    const nome = document.querySelector('input[name="nome"]').value
    const sobrenome = document.querySelector('input[name="sobrenome"]').value
    const email = document.querySelector('input[name="email"]').value
    const tipoDev = document.querySelector('input[name="devweb"]').value
    const senioridade = document.querySelector('select[name="senioridade"]').value
    const obs = document.querySelector('textarea').value
    
    let tecnologia = ""
    document.querySelectorAll("input[name='tecnologia']:checked").forEach(function (item) {
      tecnologia += " - " + item.value + "\n"
    })

    console.log({
        nome,
        sobrenome,
        email,
        tipoDev,
        senioridade,
        tecnologia,
        obs
    })

    alert(
        "Cadastro Realizado!" +
        "\nNome do DEV: " + nome + " " + sobrenome +
        "\nEmail: " + email +
        "\nTipo de DEV: " + tipoDev +
        "\nSenioridade: " + senioridade +
        "\nTecnologias: \n" + tecnologia +
        "Observações: " + obs
      )
})