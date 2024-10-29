## Env
You can configure the Blinko server at runtime by setting various options. These options can either be defined as environment variables or specified as command-line arguments when launching the server. If both methods are used, the command-line arguments will override the environment variables. Below is a list of available configuration options:
| Environment  | Description |
|--------------|-------------|
| NEXTAUTH_URL | Specifies the base URL of the application, typically the root URL of the deployed site, used for authentication callbacks and redirects.  |
| NEXT_PUBLIC_BASE_URL | Defines the public base URL of the application, used as the base path for frontend and API requests.|
| NEXTAUTH_SECRET  |A secret key used to encrypt sessions and authentication tokens, ensuring user data security.|
| DATABASE_URL  |The database connection URL, used to connect to and access the blinko's database.|
