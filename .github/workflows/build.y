# on: push
# jobs:
#     build-node:
#         runs-on: ubuntu-latest
#         container: node:20
#         steps:
#             - run: node --version
#             - run: npm --version
#             - uses: actions/download-artifact@v4
#             - run: npm install
#             - run: node server.js