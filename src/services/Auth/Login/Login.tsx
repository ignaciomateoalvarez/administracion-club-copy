import { axiosInstance } from "@services/BaseHttpService/BaseHttpService"

const loginEnpoint = "auth/login"

export const auth = {
  loginAdmin: function ({ email, password }: { email: string, password: string }) {
    return axiosInstance.post(loginEnpoint, {
      user: {
        email: email,
        password: password
      }
    }, {
      headers: {
        'X-User-Role': 'admin'
      }
    })
  }
}
