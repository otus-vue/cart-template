<template>
  <tr>
    <td>{ item.id }</td>
    <td>{ item.title }</td>
    <td>{ item.price }</td>
    <td>
      <input type="number" />
      0 в корзине
    </td>
    <td>{ sum }</td>
    <td>
      <button class="btn btn-primary">
        В корзину
      </button>
    </td>
  </tr>
</template>

<script>
export default {};
</script>
