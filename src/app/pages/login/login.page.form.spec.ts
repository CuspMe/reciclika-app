import { FormBuilder, FormGroup } from "@angular/forms";
import { LoginPageForm } from "./login.page.form";

describe('LoginPageForm', () =>{

    let loginPageForm : LoginPageForm;
    let form : FormGroup;

    beforeEach(() => {

        loginPageForm = new LoginPageForm(new FormBuilder());
        form = loginPageForm.createForm();

    })

    it('should create login form empty', () =>{

        expect(form).not.toBeNull();
        expect(form.get('email')).not.toBeNull();
        expect(form.get('email').value).toEqual("");
        expect(form.get('email').valid).toBeFalsy;
        expect(form.get('password')).not.toBeNull();
        expect(form.get('password').value).toEqual("");
        expect(form.get('password').valid).toBeFalsy;
    })

    it('should have email invalid if the email is not valid format', () =>{
        form.get('email').setValue('invalid email');

        expect(form.get('email').valid).toBeFalsy();
    })

    it('should have email valid if the email is valid format', () =>{
        form.get('email').setValue('jm23@gmail.com');

        expect(form.get('email').valid).toBeTruthy();
    })

    it('should have a valid form', () =>{
        form.get('email').setValue('jm23@gmail.com');
        form.get('password').setValue('123344');

        expect(form.valid).toBeTruthy();
    })

})