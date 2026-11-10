# Close2mi

Close2mi is a React Native app for booking nearby personal services (hair, nails, beard, makeup).

On first launch you pick a role:

- **Service user** - search providers, book a time, pay with saved cards, and manage addresses, bookings, and profile settings.
- **Service provider** - set up a business profile, offer services, manage availability and bookings, and review earnings.

Sign-in is local and mocked: `SigninScreen` / `SignupScreen` store a token in `AuthenticationStore` (`setAuthToken(String(Date.now()))`). Most lists and details come from in-app dummy data under `app/DummyData` and `app/components/serviceUser/DummyData`. `Api` is an apisauce client pointed at `Config.API_URL`; no Close2mi REST endpoints are implemented yet.

This repo was generated from the Infinite Red Ignite boilerplate (MIT). Attribution is in `NOTICE`.

## Stack

| Piece | Version in this repo |
| --- | --- |
| Expo | 49 |
| React Native | 0.72.10 |
| React | 18.2.0 |
| TypeScript | 5.2 |
| React Navigation | 6 (native stack + bottom tabs) |
| MobX State Tree | 5.1 |
| Gluestack UI | 1.0 |
| i18n-js | 3.9 (`en`, `fr`, `ar`, `ko`) |
| Jest | 29 with `jest-expo` |
| EAS | `eas.json` (development / preview / production profiles) |

Package manager is Yarn Classic (`yarn.lock`). Node 18 or newer (`package.json` `engines`).

## Local setup

```sh
git clone https://github.com/cavewebs/clos2mi.git
cd clos2mi
yarn install
cp .env.example .env
```

`yarn install` runs `bin/postInstall`, which calls `patch-package` and `npx pod-install`. `pod-install` needs macOS, Xcode, and CocoaPods. On Linux or Windows, if that step fails, install JS deps with `yarn install --ignore-scripts` and skip iOS pods.

`.env.example` lists every env var and config key the code reads. Expo inlines `EXPO_PUBLIC_API_URL` from `.env` into `app/config/config.dev.ts` and `config.prod.ts`. Other flags (`persistNavigation`, `catchErrors`, `exitRoutes`) live in `app/config/config.base.ts`, not in dotenv. Put no secrets in client config; they ship in the JS bundle.

Android debug builds use the public `android/app/debug.keystore` (password `android`). Release signing still points at that debug config in `android/app/build.gradle`; do not ship a Play Store build that way.

### Run

```sh
yarn compile          # tsc --noEmit
yarn lint             # ESLint --fix on index.js, App.js, app, test, then Prettier
yarn test             # Jest
yarn start            # expo start --dev-client
```

`yarn compile` and `yarn test` should pass. `yarn lint` currently flags older screens (style sort order, unused imports, inline styles).

Native (needs the platform SDK):

```sh
yarn ios
yarn android          # react-native run-android --active-arch-only
```

Web:

```sh
yarn expo:web
```

`yarn adb` forwards Metro / Reactotron ports for a USB Android device.

## Project structure

```
app/
  app.tsx                 Root component, fonts, ErrorBoundary, navigation persistence
  config/                 Config.API_URL, persistNavigation, catchErrors, exitRoutes
  components/             Shared UI (Ignite primitives + Close2mi widgets)
  screens/
    Auth/                 Sign in, sign up, OTP, role selection
    Splash/               First-run walkthrough
    ServiceUser/          User tabs and booking / cart / profile stacks
    ServiceProvider/      Provider tabs and onboarding / operations stacks
    Common/               Shared notification screens
    ErrorScreen/          Production error boundary UI
  navigators/             AppNavigator, ServiceUserNavigator, ServiceProviderNavigator
  models/                 MST stores (auth, walkthrough, onboarding, service details)
  services/api/           apisauce client
  i18n/                   Translations
  theme/                  Colors, spacing, typography
  DummyData/              Fixture bookings
  utils/                  Storage, crash reporting stubs
assets/icons|images/      App icons, splash, service imagery
android/ ios/             Native projects (package / bundle id com.close2mi.app)
ignite/templates/         Ignite generator templates (not used at runtime)
test/                     Jest setup
```

Entry: `index.js` (native) and `App.js` (Expo). Both load `app/app.tsx`.

Navigation starts at `SplashOne` until walkthrough is marked seen, then `LoginSignin`. After a mock token, `userType` `"su"` or `"sp"` selects the matching tab navigator. Android back-button exit routes are `SplashOne` and `LoginSignin`.

## Contributing

1. Open an issue or pick an existing one before a large change.
2. Branch from `upgrade-expo` (current default).
3. Keep dummy fixture data obviously fake (`@example.com`, placeholder numbers).
4. Run `yarn compile` and `yarn test` before you open a pull request. Fix lint on files you touch.
5. Do not commit `.env`, keystores other than the public Android debug keystore, `google-services` files, or API keys.

UI copy in this project is plain and specific. Avoid filler words in new strings.

## License

MIT. Copyright 2026 Timchosen Uzua. See `LICENSE`.

Ignite boilerplate notice: `NOTICE`.
