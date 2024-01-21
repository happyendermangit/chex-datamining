import requests
import discord 
import asyncio 
from discord.ext import commands
client = commands.Bot(command_prefix="/.qsd",intents=discord.Intents.all())
datamining_webhook = ""
token = ""
github_webhook_id = 0
access_token = "" # github access token 
def send_to_webhook(r):
    requests.post(datamining_webhook,headers={"content-type":"application/json"},json={"content":r})
@client.event
async def on_ready():
    print("ready to datamine <<3!")
@client.event 
async def on_message(message):
    if message.author.id == github_webhook_id:
        embeds = message.embeds
        for embed in embeds:
            e = embed.to_dict()
        url= e.get('url')
        print(url)
        github_api_url = "https://api.github.com"
        owner = url.split('https://github.com/')[1].split('/')[0]
        repo = url.split('https://github.com/')[1].split('/')[1]
        commit_sha = url.split('https://github.com/')[1].split('/')[3]
        commit_url = f"{github_api_url}/repos/{owner}/{repo}/commits/{commit_sha}"
        headers = {"Authorization": f"Bearer {access_token}"}
        response = requests.get(commit_url, headers=headers)
        commit_data = response.json()
        parent_sha = commit_data['parents'][0]['sha']
        print(parent_sha)
        diff_url = f"{github_api_url}/repos/{owner}/{repo}/compare/{parent_sha}...{commit_sha}"
        diff_response = requests.get(diff_url, headers=headers)
        files = diff_response.json().get('files')
        result = ""
        for file in files:
                print(file)
                if file.get('status') == "added":
                    result += f"**[{file.get('filename')}]({file.get('blob_url')})**\n```diff\n+ File added.\n```\n"
                else:
                    result += f"**[{file.get('filename')}]({file.get('blob_url')})**\n```diff\n{file.get('patch')}\n```"
        result += f"\n\n**REPO:** [{repo}](https://github.com/{owner}/{repo})"
        send_to_webhook(result)
client.run(token)