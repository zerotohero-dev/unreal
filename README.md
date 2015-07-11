                      .-') _  _  .-')     ('-.   ('-.
                     ( OO ) )( \( -O )  _(  OO) ( OO ).-.
     ,--. ,--.   ,--./ ,--,'  ,------. (,------./ . --. / ,--.
     |  | |  |   |   \ |  |\  |   /`. ' |  .---'| \-.  \  |  |.-')
     |  | | .-') |    \|  | ) |  /  | | |  |  .-'-'  |  | |  | OO )
     |  |_|( OO )|  .     |/  |  |_.' |(|  '--.\| |_.'  | |  |`-' |
     |  | | `-' /|  |\    |   |  .  '.' |  .--' |  .-.  |(|  '---.'
    ('  '-'(_.-' |  | \   |   |  |\  \  |  `---.|  | |  | |      |
      `-----'    `--'  `--'   `--' '--' `------'`--' `--' `------'

# Unreal

Serves contents of JSON files.
 
Can be used to mock API response.

## Why?

I wanted to write some cool es6; and I needed a mock server that I could 
customize further when needed.

## Usage

* Clone the project.
* Put your mockup JSON file in a folder (F).
* Rename `config.example` as `config.json`.
* Update `DATA_PATH` on `config.json` to point to the JSON folder (F).
* Update the `urls` section of `config.json` to map to your **JSON** files.
* Run `node index-compiled`
* `http://localhost:8080` will be your mock server. For example visiting
`http://localhost:8080/api/bimbo` will output 
`{"lorem":{"some-other":"response"}}` which is the contents of `lorem.json`
which is mapped in `config.example` as `{"/api/bimbo": "lorem.json"}`

That’s all for it now.

More features may come in the future.

## Have Something to Say?

Note that this project is in its early beginning.

Do not expect much from it.

Open an issue to share your comments and suggestions.
