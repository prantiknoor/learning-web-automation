# Assignment 02

The assignment is to run chromium in `docker` and remotely connect to the browser using `puppeteer`.

## Running Docker in Local Machine

```
docker run -p 3000:3000 ghcr.io/browserless/chromium
```

It pulls the chromium docker image, runs it and gives remote connection over 3000 port.

## Running Docker in GitHub Codespace

Github provide 120 core-hour (2 corse * 60 hours), 15 GB-month (15gb * 1 month) of codespaces for free. It has two options. 1. 2 core, 8gb ram 2. 4 core, 16gb ram. (Both provides 32gb storage) These are very good machine with high internet speed. Those who has low configuration computer, they can use it to smoothen their development experience. More about it here: https://docs.github.com/en/billing/managing-billing-for-your-products/managing-billing-for-github-codespaces/about-billing-for-github-codespaces

Signin as a student, It provides more free usage. (180 core-hour, 20 GB-month)

I have setup the project in a codespace. Then I run the chromium docker image. And it works smoothly.
After that I tried to run docker image only in my terminal and used it in my local machine.

## Setup GitHub Codespace for `docker`

1. Install the `GitHub CLI`.
For windows:
```winget install --id GitHub.cli```
For linux:
```sudo apt install gh```

2. Create personal access token (classic)
    1. Go to https://github.com/settings/tokens
    2. Click *generate new token (classic)*
    3. Allow `repo`, `read:org`, `admin:public_key`, `codespace`
    4. After giving a title, click *Generate*, and copy the token.
3. If you do not setup ssh key for git, then setup it first.
4. Login to the GitHub account.
```bash
gh auth login
```
```
? What account do you want to log into? GitHub.com
? What is your preferred protocol for Git operations on this host? SSH
? Upload your SSH public key to your GitHub account? /home/username/.ssh/id_ed25519.pub
? Title for your SSH key: GitHub CLI
? How would you like to authenticate GitHub CLI? Paste an authentication token
Tip: you can generate a Personal Access Token here https://github.com/settings/tokens
The minimum required scopes are 'repo', 'read:org', 'admin:public_key'.
? Paste your authentication token:
```

4. Paste the authentication token in terminal and enter. (Login done.)

5. Create a codespace in the website [github.com/codespace](https://github.com/codespace) or `gh codespace create`

6. In the terminal, run `gh codespace ssh`. Then select a codespace. Now you are in the codespace terminal.

7. Now You can run docker here. Let's say you forward the docker port in 3000 (Example: ` docker run -p 3000:3000 ghcr.io/browserless/chromium`).

8. How will you access it form local machine? Open a new terminal and run `gh codespace ports forward 3000:3000`

Now access the port in your local machine and you are good to go.