import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { catchError, throwError } from "rxjs";
import { ErrorStore } from "../../features/catalogo-corsi/services/store/error-store";

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorStore = inject(ErrorStore);
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      errorStore.setError(`${err.status}: ${err.error?.message ?? err.message}`);
      return throwError(() => err);
    })
  );
};