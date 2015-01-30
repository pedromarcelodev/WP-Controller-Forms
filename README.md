# WP Controller Forms
Request an action wp_ajax_(action) and displays the result<br>

<table>
	<thead>
		<tr>
			<th colspan="3"><h1>Parameters</h1></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><strong>action</strong></td>
			<td>wp_ajax_(action) hook</td>
			<td><em>String</em></td>
		</tr>
		<tr>
		  <td><strong>target</strong></td>
		  <td>HTML element that will receive the response content</td>
		  <td><em>String</em></td>
		</tr>
		<tr>
		  <td><strong>url</strong></td>
		  <td>URL request</td>
		  <td><em>String</em></td>
		</tr>
		<tr>
		  <td><strong>valid_fields</strong></td>
		  <td>A string containing a selector expression, an element or a jQuery object that represents the form fields for validation</td>
		  <td><em>(String|DOM element|jQuery object)</em></td>
		</tr>
		<tr>
		  <td><strong>valid_fields_function(index, element)</strong></td>
		  <td>Function used as a test for each element in the set</td>
		  <td><em>Function</em></td>
		</tr>
		<tr>
		  <td><strong>valid_fields_error()</strong></td>
		  <td>Function that will be executed in error case in the form validation</td>
		  <td><em>Function</em></td>
		</tr>
		<tr>
		  <td><strong>before(response)</strong></td>
		  <td>Function that will be executed before the response content insertion</td>
		  <td><em>Function</em></td>
		</tr>
		<tr>
		  <td><strong>after(response)</strong></td>
		  <td>Function that will be executed after the response content insertion</td>
		  <td><em>Function</em></td>
		</tr>
	</tbody>
</table>
<h2>Changelog</h2>
<ul>
  <li>
    <strong>v1.2</strong>
    <ul>
      <li>Added: valid_fields parameter for selection of the form fields</li>
      <li>Added: Functions valid_fields_function and valid_fields_error for form validation</li>
    </ul>
  </li>
  <li>
    <strong>v1.0</strong>
    <ul>
      <li>Plugin's start</li>
    </ul>
  </li>
</ul>
