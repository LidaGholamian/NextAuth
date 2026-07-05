import { string, trim, length, startsWith, pipe, minLength, maxLength, object} from 'valibot';
import * as v from "valibot";

const MobileSchema = pipe(
    string(),
    trim(),
    length(11, 'شماره موبایل باید 11 رقم باشد'),
    startsWith('09', 'شماره موبایل باید با 09 شروع شود')
);

const PasswordSchema = pipe(
  string(),
  trim(),
  minLength(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد'),
  maxLength(32, 'رمز عبور نباید بیشتر از ۳۲ کاراکتر باشد')
);

export const SignInSchema = object({
    username: MobileSchema,
    password: PasswordSchema
});

export const VerificationSchema = v.object({
  username: v.pipe(
    v.string(),
    v.regex(/^09\d{9}$/, "شماره موبایل معتبر نیست")
  ),

  code: v.pipe(
    v.string(),
    v.length(5, "کد تایید باید ۵ رقم باشد"),
    v.regex(/^\d{5}$/, "کد تایید باید فقط شامل عدد باشد")
  ),
});
