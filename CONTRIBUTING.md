# Translating

Datapack Helper Plus (MCF) supports multiple languages. If you'd like to help us translate this project, it would be really appreciated!

## Steps

1. Get the code of the language that you want to translate in. We use the [Visual Studio Code Language ID](https://github.com/Microsoft/Localization/wiki/Visual-Studio-Code-Community-Localization-Project) in this project. For example, if I want to translate the project to Spanish, then the code I get is `es`.
2. Open Tabula, a localization app made by [Misode](https://github.com/misode). Replace `<CODE>` in this link with the code you got in the last step:
    ```
    https://misode.github.io/tabula/?repo=SPGoding/datapack-language-server/master/src/locales&source=en&target=<CODE>
    ```
    For example, if I want to translate the project into Spanish, the link I should use is `https://misode.github.io/tabula/?repo=SPGoding/datapack-language-server/master/src/locales&source=en&target=es`.
3. Start translating.
4. When you have done, click **Export** button in Tabula.
5. Open another Tabula link to translate the other part of the extension, including configuration points, command titles, etc. Replace `<CODE>` in this link with the code you got in the first step:
    ```
    https://misode.github.io/tabula/?repo=SPGoding/datapack-language-server/master&source=package.nls&target=package.nls.<CODE>
    ```
    For example, if I want to translate the project into Spanish, the link I should use is `https://misode.github.io/tabula/?repo=SPGoding/datapack-language-server/master&source=package.nls&target=package.nls.es`.
6. Start translating.
7. When you have done, click **Export** button in Tabula, and send the two translation files to me via [Pull Request](https://github.com/SPGoding/datapack-language-server/pulls) or [![Discord](https://img.shields.io/discord/666020457568403505?logo=discord&style=flat-square)](https://discord.gg/EbdseuS).
