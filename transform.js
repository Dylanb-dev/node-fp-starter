/* eslint-disable */

module.exports = function(fileInfo, api, options) {
  const j = api.jscodeshift
  const signatures = j(fileInfo.source).getTypes()
    const convertToTemplateString = p => {
    const extractNodes = node => {
      if (node.type === 'BinaryExpression' && node.operator === '+') {
        return [ ...extractNodes(node.left), ...extractNodes(node.right)]
      }

      return [ node ]
    }
  }

  console.log(signatures)
  return
  // return ()
  //   j(file.source)
  //     // Find stuff that looks like this.xyz.bind(this)
  //     .find(j.CallExpression, {
  //       callee: {
  //         object: { object: j.ThisExpression },
  //         property: { name: 'bind' }
  //       }
  //     })
  //     // Ensure that .bind() is being called with only one argument, and that argument is "this".
  //     .filter(
  //       p =>
  //         p.value.arguments.length == 1 &&
  //         p.value.arguments[0].type == 'ThisExpression'
  //     )
  //     // We can now replace it with ::this.xyz
  //     .replaceWith(p => j.bindExpression(null, p.value.callee.object))
  //     .toSource()
  // )
}
