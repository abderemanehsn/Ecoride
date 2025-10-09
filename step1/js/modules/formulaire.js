

export default class Formulaire {

    // Regex statiques
    static EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    static PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;

    /**
     * Initialise le validateur pour tous les formulaires d'une classe donnée.
     * @param {string} formClassName - La classe CSS commune aux formulaires.
     */
    constructor(inscripform) {
        this.forms = document.querySelectorAll(`.${inscripform}`);

        this.forms.forEach(form => {
            
            // Attache la validation en temps réel au 'keyup' pour tous les inputs
            form.querySelectorAll('input').forEach(input => {
                input.addEventListener('keyup', () => this.validateForm(form));
            });
        });

        
    }





}
