<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Overview Feature</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Location</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Width Area</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Width Building</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Bedroom</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Bathroom</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Diningroom</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Familyroom</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Carport</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Garage</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'SimpleTable',
};
</script>

<style lang="scss" scoped>
.table-container {
  margin: 20px;
  table {
    border-radius: 8px;
    width: 100%;
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
      border-radius: 8px;
    }
    th {
      background-color: #FDF8F7;
      font-size: 1.9rem;
      margin: 0;
      padding: 0;
      color: #DA4132;
      text-align: center;
      padding: 20px 0;
      @media (max-width: 768px) {
        font-size: 1.2rem !important;
      }
    }
    td {
      font-size: 1.1rem;
      line-height: 28px;
      color: darkcyan;
      @media (max-width: 768px) {
        font-size: 0.9rem !important;
      }
    }
    tr:nth-child(even) {
      background-color: #FDF8F7;
    }
    tr:hover {
      background-color: #f1f1f1;
    }
  }
}
</style>
