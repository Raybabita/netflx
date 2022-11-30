import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, Subject, tap } from 'rxjs';
import { __values } from 'tslib';
import { AuthSignupLoginResponse } from '../Model/auth-response';
import { Users } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<Users>(null!);
  // private data!: SignUp;
  constructor(private http: HttpClient) {

  }

  // signup(data: any): Observable<any> {
  //   return this.http.post('http://localhost:5000/auth/signup', data);
  // }

  // signin(data: any): Observable<any> {
  //   return this.http.post('http://localhost:5000/auth/login', data);
  // }


  // getprofile(): Observable<any> {
  //   let headers = {
  //     'Authorization': "Bearer " + localStorage.getItem('token')
  //   }
  //   return this.http.get('http://localhost:5000/auth/profile', { headers: headers })
  // }

  // updateProfile(id: any, data: any): Observable<any> {
  //   // alert(id)
  //   let headers = {
  //     'Authorization': "Bearer " + localStorage.getItem('token')
  //   }
  //   return this.http.put(`http://localhost:5000/auth/${id}`, data, { headers: headers });
  // }

  // postProfile(data: any): Observable<any> {
  //   let headers = {
  //     'Authorization': "Bearer " + localStorage.getItem('token')
  //   }
  //   return this.http.post(`http://localhost:5000/auth/upload`, data, { headers: headers });

  // }


  // profilePicPost() {
  //   let headers = {
  //     'Authorization': "Bearer " + localStorage.getItem('token')
  //   }
  //   return this.http.post(`http://localhost:5000/auth/upload`, { headers: headers });
  // }

  // setter(data: any) {
  //   console.log("from setter", data)
  //   this.data = data;
  // }

  // getter() {
  //   console.log("from getter", this.data)
  //   return this.data;
  // }


  userSignUp(email: any, password: any) {
    return this.http.post<AuthSignupLoginResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAIG2cbbRo1SxZpqvpSXJ1DOhhHd_5gbxw', {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      tap(res => {
        console.log(res)
        this.authenticationUser(res.email, res.localId, res.idToken, +res.expiresIn)
      })
    )

  }



  userLogin(email: any, password: any) {
    return this.http.post<AuthSignupLoginResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAIG2cbbRo1SxZpqvpSXJ1DOhhHd_5gbxw', {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      tap(res => {
        console.log(res)
        this.authenticationUser(res.email, res.localId, res.idToken, +res.expiresIn)
      })
    )
  }

  autosignIn() {
    const userData = localStorage.getItem("userDetails") //user data get from local storage as string
    console.log("data feached form local storage", userData)
    const currentUser = JSON.parse(localStorage.getItem('userDetails') || '{}'); //user data get from local storage and covert to object
    console.log("current user", currentUser)
    if (!currentUser) {
      return;
    }
    const loggedInUser = new Users(currentUser.email, currentUser.id, currentUser._token, new Date(currentUser._tokenExpirationDate))
    if (loggedInUser.token) {
      this.user.next(loggedInUser);
      this.getUserProfile(loggedInUser.token)
    }

  }


  signOut() {
    localStorage.removeItem("userDetails");
  }

  private authenticationUser(email: any, userId: any, token: any, expiresIn: any) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new Users(email, userId, token, expirationDate);
    this.user.next(user);//stroring data in subject
    console.log(" fetch user Details", user);
    localStorage.setItem("userDetails", JSON.stringify(user));

  }


  updateProfile(data: any) {
    return this.http.post<any>('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAIG2cbbRo1SxZpqvpSXJ1DOhhHd_5gbxw',
      {
        idToken: data.token,
        displayName: data.name,
        photoUrl: data.profilepicUrl,
        returnSecureToken: true
      }
    )
  }

  getUserProfile(token: any): Observable<any> {
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAIG2cbbRo1SxZpqvpSXJ1DOhhHd_5gbxw', {
      idToken: token
    })
  }


  changePassword(data: any) {
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAIG2cbbRo1SxZpqvpSXJ1DOhhHd_5gbxw', {
      idToken: data.idToken,
      password: data.newpassword,
      returnSecureToken: true
    })
  }


  forgotpassoword(data: any) {
    return this.http.post<any>('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAIG2cbbRo1SxZpqvpSXJ1DOhhHd_5gbxw', {
      requestType: 'PASSWORD_RESET',
      email: data.email
    })
  }


}
